'use strict';

let Input = require('./Input.js');

class InputDate extends Input {

    constructor(name, value, attributes) {
        super(name, 'date', value, attributes);
    }

}

module.exports = InputDate;