'use strict';

class Input {

    constructor(name, type, value, attributes) {
        name = String(name || '').trim();
        type = String(type || 'text').trim();
        value = String(value || '').trim();
        if ((attributes instanceof Object) === false) {
            attributes = {};
        }

        if (name.length === 0 || type.length === 0) {
            throw new Error('Input name and type are required');
        }

        this.attributes = {};
        this.attributes.type = type;
        this.attributes.name = name;
        this.attributes.value = value;

        let attributeValue;
        for (let index in attributes) {
            attributeValue = String(attributes[index] || '');
            if (attributeValue.length) {
                this.attributes[this.escapeHtml(index).trim()] = this.escapeHtml(attributeValue);
            }
        }
    }

    setAttribute(name, value) {
        this.attributes[this.escapeHtml(name).trim()] = this.escapeHtml(value);
        return this;
    }

    getAttribute(name) {
        return this.attributes[this.escapeHtml(name).trim()];
    }

    removeAttribute(name) {
        this.attributes[this.escapeHtml(name).trim()] = '';
        return this;
    }

    setValue(value) {
        return this.setAttribute('value', value);
    }

    getValue() {
        return this.getAttribute('value');
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

    hasClass(name) {
        let classAttr = String(this.getAttribute('class') || '').split(' ');
        return classAttr.indexOf(String(name || '')) > -1;
    }

    escapeHtml(value) {
        value = String((value === null || value === undefined) ? '' : value);
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\'/g, '&#39;')
            .replace(/[&<>\"\']/, '&quot;');
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