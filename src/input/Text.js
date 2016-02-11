'use strict';

let Input = require('./Input.js');

class Text extends Input {

    constructor(name, value, attributes) {
        super(name, 'text', value, attributes);
    }

}

module.exports = Text;