'use strict';

let Input = require('./Input.js');

class InputRange extends Input {

    constructor(name, value, attributes) {
        super(name, 'range', value, attributes);
    }

}

module.exports = InputRange;