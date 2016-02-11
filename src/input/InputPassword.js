'use strict';

let Input = require('./Input.js');

class InputPassword extends Input {

    constructor(name, value, attributes) {
        super(name, 'password', value, attributes);
    }

}

module.exports = InputPassword;