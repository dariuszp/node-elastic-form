'use strict';

let Input = require('./Input.js');

class InputTel extends Input {

    constructor(name, value, attributes) {
        super(name, 'tel', value, attributes);
    }

}

module.exports = InputTel;