'use strict';

let Input = require('./Input.js');

class InputColor extends Input {

    constructor(name, value, attributes) {
        super(name, 'color', value, attributes);
    }

}

module.exports = InputColor;