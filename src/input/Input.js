'use strict';

let escapeHtml = require('./../util/escapeHtml');

class Input {

    constructor(name, type, value, attributes) {
        name = String(name || '').trim();
        type = String(type || 'text').trim();
        value = String(value || '');
        if ((attributes instanceof Object) === false) {
            attributes = {};
        }

        if (name.length === 0 || type.length === 0) {
            throw new Error('Input name and type are required');
        }

        this.attributes = {};
        this.attributes.type = type;
        this.attributes.name = name;

        if (value.length) {
            this.attributes.value = value;
        }

        for (let index in attributes) {
            this.setAttribute(index, attributes[index]);
        }
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

    setValue(value) {
        return this.setAttribute('value', value);
    }

    getValue() {
        return this.getAttribute('value');
    }

    disable(flag) {
        if (flag === undefined) {
            flag = true;
        }
        return this.setAttribute('disabled', flag ? 'disabled' : '');
    }

    readonly(flag) {
        if (flag === undefined) {
            flag = true;
        }
        return this.setAttribute('readonly', flag ? 'readonly' : '');
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

        return `<input ${attributes.join(' ')}>`;
    }

    toString() {
        return this.render();
    }
}

module.exports = Input;