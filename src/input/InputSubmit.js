'use strict';

let Input = require('./Input.js');

class InputSubmit extends Input {

    constructor(name, value, attributes) {
        super(name, 'submit', value, attributes);
    }

}

module.exports = InputSubmit;