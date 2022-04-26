const HX711ColorBlock = "#33aaaa";
Blockly.Blocks['hx711_loadcell_create'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_create",
          "message0": 'khởi tạo cảm biến hx117 chân SCK %1 chân DATA %2',
          "args0": [
            {
              "type": "field_dropdown",
              "name": "SCK",
              "options": [
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ],
                [
                  "P19",
                  "pin19"
                ],
                [
                  "P20",
                  "pin20"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "DATA",
              "options": [
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ],
                [
                  "P19",
                  "pin19"
                ],
                [
                  "P20",
                  "pin20"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": HX711ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };
  
  Blockly.Python['hx711_loadcell_create'] = function(block) {
    var dropdown_sck = block.getFieldValue('SCK');
    var dropdown_data = block.getFieldValue('DATA');
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import HX711';
    var code = 'hx711_loadcell = HX711(pd_sck=' + dropdown_sck + '.pin, d_out=' + dropdown_data + '.pin)\n';
    return code;
  };
 
  
  Blockly.Blocks['hx711_loadcell_tare'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_tare",
          "message0": 'đặt giá trị về 0',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": HX711ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_tare'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'hx711_loadcell.tare()\n';
    return code;
  };
  
  Blockly.Blocks['hx711_loadcell_read_value'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_read_value",
          "message0": 'đọc giá trị cảm biến',
          "args0": '',
          "colour": HX711ColorBlock,
          "output" : null,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return [hx711_loadcel];
    }
  };

  Blockly.Python['hx711_loadcell_read_value'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'hx711_loadcell.get_grams()';
    return [code, Blockly.Python.ORDER_NONE];
  };


  Blockly.Blocks['hx711_loadcell_power'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_power",
          "message0": '%1 cảm biến hx711',
          "args0": [
            {
              "type": "field_dropdown",
              "name": "action",
              "options": [
                ["bật", "on"],
                ["tắt", "off"],
              ],
            },
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": HX711ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_power'] = function(block) {
    var action = block.getFieldValue("action");
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'hx711_loadcell.power_' + action +'()\n';
    return code;
  };

  Blockly.Blocks['hx711_loadcell_calibration_scale_weight'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_scale_weight",
          "message0": 'cài đặt tỉ lệ cân chỉnh %1',
          "args0": [
            {
              type: "input_value",
              name: "SCALE",
              check: "Number",
              min: '',
              max: ''
              
            },
          ],
          "previousStatement": null,
          "nextStatement": null,
          "inputsInline": true,
          "colour": HX711ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_scale_weight'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var scale = Blockly.Python.valueToCode(block, 'SCALE', Blockly.Python.ORDER_ATOMIC);
    var code = 'hx711_loadcell.set_scale(' + scale +')\n';
    return code;
  };
