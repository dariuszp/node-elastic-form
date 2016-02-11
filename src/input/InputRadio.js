'use strict';

let Input = require('./Input.js');

class InputRadio extends Input {

    constructor(name, value, attributes) {
        super(name, 'radio', value, attributes);
    }

}

module.exports = InputRadio;