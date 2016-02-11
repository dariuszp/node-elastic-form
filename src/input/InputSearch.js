'use strict';

let Input = require('./Input.js');

class InputSearch extends Input {

    constructor(name, value, attributes) {
        super(name, 'search', value, attributes);
    }

}

module.exports = InputSearch;