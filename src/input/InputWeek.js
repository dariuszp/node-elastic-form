'use strict';

let Input = require('./Input.js');

class InputWeek extends Input {

    constructor(name, value, attributes) {
        super(name, 'week', value, attributes);
    }

}

module.exports = InputWeek;