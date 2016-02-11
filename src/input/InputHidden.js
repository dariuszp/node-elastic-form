'use strict';

let Input = require('./Input.js');

class InputHidden extends Input {

    constructor(name, value, attributes) {
        super(name, 'hidden', value, attributes);
    }

}

module.exports = InputHidden;