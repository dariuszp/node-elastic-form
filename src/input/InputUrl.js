'use strict';

let Input = require('./Input.js');

class InputUrl extends Input {

    constructor(name, value, attributes) {
        super(name, 'url', value, attributes);
    }

}

module.exports = InputUrl;