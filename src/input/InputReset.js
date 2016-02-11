'use strict';

let Input = require('./Input.js');

class InputReset extends Input {

    constructor(name, value, attributes) {
        super(name, 'reset', value, attributes);
    }

}

module.exports = InputReset;