'use strict';

let Input = require('./Input.js');

class InputMonth extends Input {

    constructor(name, value, attributes) {
        super(name, 'month', value, attributes);
    }

}

module.exports = InputMonth;