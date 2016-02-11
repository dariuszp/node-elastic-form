'use strict';

let Input = require('./Input.js');

class InputImage extends Input {

    constructor(name, value, attributes) {
        super(name, 'image', value, attributes);
    }

}

module.exports = InputImage;