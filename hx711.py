import utime
from machine import Pin
from micropython import const


class HX711Exception(Exception):
    pass


class InvalidMode(HX711Exception):
    pass


class DeviceIsNotReady(HX711Exception):
    pass


class HX711(object):
    """
    MicroPython driver for Avia Semiconductor HX711
    24-Bit Analog-to-Digital Converter
    """

    CHANNEL_A_128 = const(1)
    CHANNEL_A_64 = const(3)
    CHANNEL_B_32 = const(2)

    DATA_BITS = const(24)
    MAX_VALUE = const(0x7fffff)
    MIN_VALUE = const(0x800000)

    READY_TIMEOUT_SEC = const(5)
    SLEEP_DELAY_USEC = const(80)

    def __init__(self, d_out: int, pd_sck: int,
                 channel: int = CHANNEL_A_128):

        self.d_out_pin = Pin(d_out, Pin.IN)
        self.pd_sck_pin = Pin(pd_sck, Pin.OUT, value=0)

        self.channel = channel

        self.SCALE = 1
        self.offset = 0


    def __repr__(self):
        return "HX711 on channel %s, gain=%s" % self.channel


    def _convert_from_twos_complement(self, value: int) -> int:
        """
        Convert 24-bit two's complement value to signed integer.
        """

        if value & (1 << (self.DATA_BITS - 1)):
            value -= 1 << self.DATA_BITS

        return value


    def _set_channel(self):
        """
        Input and gain selection is controlled by
        the number of PD_SCK pulses:

        1 pulse  = Channel A, gain 128
        2 pulses = Channel B, gain 32
        3 pulses = Channel A, gain 64
        """

        for i in range(self._channel):
            self.pd_sck_pin.value(1)
            self.pd_sck_pin.value(0)


    def _wait(self):
        """
        Wait until HX711 data is ready.

        If HX711 is not ready within READY_TIMEOUT_SEC,
        DeviceIsNotReady exception will be raised.
        """

        start = utime.ticks_ms()

        while not self.is_ready():

            elapsed = utime.ticks_diff(
                utime.ticks_ms(),
                start
            )

            if elapsed > self.READY_TIMEOUT_SEC * 1000:
                raise DeviceIsNotReady()


    @property
    def channel(self) -> tuple:
        """
        Return current channel and gain.
        """

        if self._channel == self.CHANNEL_A_128:
            return 'A', 128

        if self._channel == self.CHANNEL_A_64:
            return 'A', 64

        if self._channel == self.CHANNEL_B_32:
            return 'B', 32


    @channel.setter
    def channel(self, value):
        """
        Set input channel and gain.
        """

        if value not in (
            self.CHANNEL_A_128,
            self.CHANNEL_A_64,
            self.CHANNEL_B_32
        ):
            raise InvalidMode(
                'Gain should be one of '
                'HX711.CHANNEL_A_128, '
                'HX711.CHANNEL_A_64, '
                'HX711.CHANNEL_B_32'
            )

        self._channel = value

        if not self.is_ready():
            self._wait()

        # Read/discard one complete conversion
        for i in range(self.DATA_BITS):
            self.pd_sck_pin.value(1)
            self.pd_sck_pin.value(0)

        self._set_channel()


    def is_ready(self) -> bool:
        """
        DOUT LOW means HX711 data is ready.
        """

        return self.d_out_pin.value() == 0


    def power_off(self):
        """
        PD_SCK HIGH for >60 us puts HX711
        into power-down mode.
        """

        self.pd_sck_pin.value(0)
        self.pd_sck_pin.value(1)

        utime.sleep_us(self.SLEEP_DELAY_USEC)


    def power_on(self):
        """
        PD_SCK LOW wakes HX711.
        """

        self.pd_sck_pin.value(0)

        self.channel = self._channel


    def read(self, raw=False):
        """
        Read current HX711 value.
        """

        if not self.is_ready():
            self._wait()

        raw_data = 0

        for i in range(self.DATA_BITS):

            self.pd_sck_pin.value(1)
            self.pd_sck_pin.value(0)

            raw_data = (
                raw_data << 1
            ) | self.d_out_pin.value()

        self._set_channel()

        if raw:
            return raw_data

        return self._convert_from_twos_complement(raw_data)


    def reset(self):

        self.power_off()
        self.power_on()


    def tare(self):

        self.offset = self.read_average()


    def raw_value(self):

        return self.read() - self.offset


    def stable_value(self, reads=10, delay_us=500):

        values = []

        for _ in range(reads):

            values.append(
                self.raw_value()
            )

            utime.sleep_us(delay_us)

        return self._stabilizer(values)


    @staticmethod
    def _stabilizer(values, deviation=10):

        weights = []

        for prev in values:

            count = 0

            for current in values:

                # Tránh chia cho 0
                if prev == 0:

                    if current == 0:
                        count += 1

                else:

                    percent = abs(
                        prev - current
                    ) / (abs(prev) / 100)

                    if percent <= deviation:
                        count += 1

            weights.append(count)

        return sorted(
            zip(values, weights),
            key=lambda x: x[1]
        ).pop()[0]


    def read_average(self, reads=10):
        """
        Read multiple samples and return average.
        """

        total = 0

        for i in range(reads):

            total += self.read()

        return total / reads


    def get_grams(self, reads=16):
        """
        Return calculated weight in grams.
        """

        value = (
            self.read_average(reads)
            - self.offset
        )

        grams = value / self.SCALE

        return grams


    def set_scale(self, scale):

        self.SCALE = scale


    def set_offset(self, offset):

        self.offset = offset


    def get_scale(self):

        return self.SCALE


    def get_offset(self):

        return self.offset