'use strict';

let Input = require('./../input/Input.js'),
    escapeHtml = require('./../util/escapeHtml.js');

class FormWidget {

    constructor(label, input, attributes) {
        label = String(label || '').trim();
        if ((input instanceof Input) === false) {
            throw new Error('Invalid input');
        }
        if ((attributes instanceof Object) === false) {
            attributes = {};
        }
        if (label.length === 0) {
            throw new Error('Label is required');
        }

        this.label = escapeHtml(label);
        this.input = input;

        for (let index in attributes) {
            this.setAttribute(index, attributes[index]);
        }
    }

    getInput() {
        return this.input;
    }

    setLabel(label) {
        this.label = escapeHtml(label);
    }

    getLabel() {
        return this.label;
    }

    setAttribute(name, value) {
        this.attributes[escapeHtml(name).trim()] = escapeHtml(value);
        return this;
    }

    getAttribute(name) {
        return this.attributes[escapeHtml(name).trim()];
    }

    hasAttribute(name) {
        return this.getAttribute(name) !== undefined;
    }

    removeAttribute(name) {
        this.attributes[escapeHtml(name).trim()] = '';
        return this;
    }

    setClass(name) {
        return this.setAttribute('class', name);
    }

    addClass(name) {
        let classAttr = String(this.getAttribute('class') || '').split(' ');
        if (!this.hasClass(name)) {
            classAttr.push(name);
            this.setAttribute('class', classAttr.join(' '));
        }
        return this;
    }

    removeClass(name) {
        let classAttr = String(this.getAttribute('class') || '').split(' ');
        if (this.hasClass(name)) {
            classAttr.splice(classAttr.indexOf(name), 1);
            this.setAttribute('class', classAttr.join(' '));
        }
        return this;
    }

    removeAllClasses(name) {
        return this.setAttribute('class', '');
    }

    hasClass(name) {
        let classAttr = String(this.getAttribute('class') || '').split(' ');
        return classAttr.indexOf(String(name || '')) > -1;
    }

    setId(name) {
        return this.setAttribute('id', name);
    }

    getId() {
        return this.getAttribute('id');
    }

    removeId() {
        return this.setAttribute('id', '');
    }

    render() {
        let attributes = [];
        for (let index in this.attributes) {
            attributes.push(`${index}="${this.attributes[index]}"`);
        }

        return `<div ${attributes.join(' ')}><label>${this.label}</label> ${this.input}</div>`;
    }

    toString() {
        return this.render();
    }
}

module.exports = FormWidget;