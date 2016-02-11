'use strict';

let Input = require('./Input.js');

class InputNumber extends Input {

    constructor(name, value, attributes) {
        super(name, 'number', value, attributes);
    }

}

module.exports = InputNumber;