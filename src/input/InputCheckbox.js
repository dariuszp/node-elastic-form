'use strict';

let Input = require('./Input.js');

class InputCheckbox extends Input {

    constructor(name, value, attributes) {
        super(name, 'checkbox', value, attributes);
    }

}

module.exports = InputCheckbox;