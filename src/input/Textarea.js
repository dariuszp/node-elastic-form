'use strict';

let Input = require('./Input.js');

class Textarea extends Input {

    render() {
        let attributes = [],
            value = '';

        for (let index in this.attributes) {
            switch(index) {
                case 'value':
                    value = this.attributes[index];
                    break;
                case 'type':
                    break;
                default:
                    attributes.push(`${index}="${this.attributes[index]}"`);
            }
        }

        return `<textarea ${attributes.join(' ')}>${value}</textarea>`;
    }

}

module.exports = Textarea;