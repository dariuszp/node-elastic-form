'use strict';

let Input = require('./Input.js');

class InputEmail extends Input {

    constructor(name, value, attributes) {
        super(name, 'email', value, attributes);
    }

}

module.exports = InputEmail;