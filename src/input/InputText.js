'use strict';

let Input = require('./Input.js');

class InputText extends Input {

    constructor(name, value, attributes) {
        super(name, 'text', value, attributes);
    }

}

module.exports = InputText;