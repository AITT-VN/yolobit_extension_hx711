const ColorBlock = "#FBC041";
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
          "colour": ColorBlock,
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
  
  Blockly.Blocks['hx711_loadcell_read'] = {
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_read",
          "message0": 'Khối lượng đọc được là %1',
          "args0": [
            {
              "type": "field_dropdown",
              "name": "TYPE",
              "options": [
                [
                  "kg",
                  "KG"
                ],
                [
                  "g",
                  "G"
                ]
              ]
            }
          ],
          "output": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };
  
  Blockly.Python['hx711_loadcell_read'] = function(block) {
    var dropdown_type = block.getFieldValue('TYPE');
    // TODO: Assemble Python into code variable.
    var code = '';
    if (dropdown_type == 'KG') {
      code = '(print("Item weighs {} grams.\n".(format(val)) / 1000))';
    } else {
      code = '"Item weighs {} grams".format(val)';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
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
          "message0": 'Đặt lại giá trị của cân về giá trị 0',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
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
          "message0": 'Giá trị cảm biến khối lượng',
          "args0": '',
          "colour": ColorBlock,
          "output": null,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_read_value'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'val = hx711_loadcell.get_grams()\n';
    return [code, Blockly.Python.ORDER_NONE];;
  };


  Blockly.Blocks['hx711_loadcell_reset'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_reset",
          "message0": 'Khởi động lại cảm biến khối lượng',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_reset'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'hx711_loadcell.reset()\n';
    return code;
  };


  Blockly.Blocks['hx711_loadcell_calibration_offset'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_offset",
          "message0": 'Bắt đầu calibration vui vòng không đặt vật lên bàn cân',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_offset'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'offset = hx711_loadcell.read_average()\n';
    return code;
  };


  Blockly.Blocks['hx711_loadcell_calibration_print_offset'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_print_offset",
          "message0": 'Giá trị cảm biến khối lượng khi ở 0 grams',
          "args0": '',
          "output": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_print_offset'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = '"Giá trị cảm biến ở 0 grams: {}"' + '.format(offset)\n';
    return [code, Blockly.Python.ORDER_NONE];
  };


  Blockly.Blocks['hx711_loadcell_calibration_set_offset'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_set_offset",
          "message0": 'Thiết lập giá trị cảm biến khối lượng',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_set_offset'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'hx711_loadcell.set_offset(offset)\n';
    return code;
  };

  Blockly.Blocks['hx711_loadcell_calibration_measure_weight'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_measure_weight",
          "message0": 'Bắt đầu đo lường',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_measure_weight'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var code = 'measured_weight = (hx711_loadcell.read_average()-hx711_loadcell.get_offset())\n';
    return code;
  };

  Blockly.Blocks['hx711_loadcell_calibration_input_weight'] = {
    /**
     * Block for waiting.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "type": "hx711_loadcell_calibration_input_weight",
          "message0": 'Nhập khối lượng của vật mẫu : %1',
          "args0": [
            {
              type: "input_value",
              name: "WEIGHT",
              check: "Number",
              min: 0,
              max: ''
            },
          ],
          "output": null,
          "colour": ColorBlock,
          "tooltip": '',
          "helpUrl": ''
        }
      );
    },
    getDeveloperVars: function() {
      return ['hx711_loadcell'];
    }
  };

  Blockly.Python['hx711_loadcell_calibration_input_weight'] = function(block) {
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
    var weight = Blockly.Python.valueToCode(block, 'WEIGHT', Blockly.Python.ORDER_ATOMIC);
    var code = 'item_weight = ' + ' input("Nhập khối lượng của vật mẫu ở đơn vị grams : "' + weight +  '".\n>")\n';
    return [code, Blockly.Python.ORDER_NONE];
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
          "message0": 'Bắt đầu đo lường',
          "args0": '',
          "previousStatement": null,
          "nextStatement": null,
          "colour": ColorBlock,
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
    var code = 'scale = int(measured_weight)/int(item_weight)\n' + 'hx711_loadcell.set_scale(scale)\n'; 
  };
