'use strict';

let should = require('should'),
    InputTextarea = require(__dirname + '/../src/input/InputTextarea.js');

describe('InputTextarea', function () {
    describe('.toString()', function () {
        it('should print simple input', function () {
            let input = new InputTextarea('contact', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });

            input.toString().should.equal('<textarea name="contact" class="form-control">poltorak.dariusz@gmail.com</textarea>');
        });
    });
});