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