'use strict';

let Input = require('./Input.js');

class InputDatetime extends Input {

    constructor(name, value, attributes) {
        super(name, 'datetime', value, attributes);
    }

}

module.exports = InputDatetime;