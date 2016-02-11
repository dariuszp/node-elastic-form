'use strict';

let Input = require('./Input.js');

class InputFile extends Input {

    constructor(name, value, attributes) {
        super(name, 'file', value, attributes);
    }

}

module.exports = InputFile;