'use strict';

let should = require('should'),
    Textarea = require(__dirname + '/../src/input/Textarea.js');

describe('Textarea', function () {
    describe('.toString()', function () {
        it('should print simple input', function () {
            let contactEmailInput = new Textarea('contact', 'email', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });

            contactEmailInput.toString().should.equal('<textarea name="contact" class="form-control">poltorak.dariusz@gmail.com</textarea>');
        });
    });
});