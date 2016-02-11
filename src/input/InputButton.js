'use strict';

let Input = require('./Input.js');

class InputButton extends Input {

    constructor(name, value, attributes) {
        super(name, 'button', value, attributes);
    }

}

module.exports = InputButton;