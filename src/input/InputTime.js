'use strict';

let Input = require('./Input.js');

class InputTime extends Input {

    constructor(name, value, attributes) {
        super(name, 'time', value, attributes);
    }

}

module.exports = InputTime;