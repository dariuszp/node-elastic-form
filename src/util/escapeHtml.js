'use strict';

module.exports = function escapeHtml(value) {
    value = String((value === null || value === undefined) ? '' : value);
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\'/g, '&#39;')
        .replace(/[&<>\"\']/, '&quot;');
};