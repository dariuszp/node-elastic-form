'use strict';

let Input = require('./Input.js');

class InputDatetimeLocal extends Input {

    constructor(name, value, attributes) {
        super(name, 'datetime-local', value, attributes);
    }

}

module.exports = InputDatetimeLocal;