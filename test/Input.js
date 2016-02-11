'use strict';

let should = require('should'),
    Input = require(__dirname + '/../src/input/Input.js');

describe('Input', function () {
    describe('.toString()', function () {
        it('should print simple input', function () {
            let contactEmailInput = new Input('contact', 'email', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });

            contactEmailInput.toString().should.equal('<input type="email" name="contact" value="poltorak.dariusz@gmail.com" class="form-control">');
        });
    });
});