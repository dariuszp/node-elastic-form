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

    describe('.addClass()', function () {
        it('should add class error to input', function () {
            let contactEmailInput = new Input('contact', 'email', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });
            contactEmailInput.addClass('error');
            contactEmailInput.toString().should.equal('<input type="email" name="contact" value="poltorak.dariusz@gmail.com" class="form-control error">');
        });

        it('should confirm that textarea have error class', function () {
            let contactEmailInput = new Input('contact', 'email', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });
            contactEmailInput.addClass('error');
            contactEmailInput.hasClass('error').should.be.ok();
        });

        it('should remove class error from input', function () {
            let contactEmailInput = new Input('contact', 'email', 'poltorak.dariusz@gmail.com', {
                class: 'form-control'
            });
            contactEmailInput.addClass('error');
            contactEmailInput.hasClass('error').should.be.ok();
            contactEmailInput.removeClass('error');
            contactEmailInput.hasClass('error').should.not.be.ok();
            contactEmailInput.toString().should.equal('<input type="email" name="contact" value="poltorak.dariusz@gmail.com" class="form-control">');
        });
    });
});