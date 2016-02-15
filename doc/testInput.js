'use strict';

//
// This script print web page with all inputs
//

var express = require('express');
var glob = require('glob');
var app = express();

app.get('/', function (req, res) {
    var response = ['<h1>INPUTS</h1>'];
    glob('/home/dariuszp/www/node-elastic-form/src/**/Input*.js', {}, function (err, files) {
        if (err) {
            throw err;
        }
        for (var i = 0; i < files.length; i++) {
            response.push(`<h2>${files[i].split('/').pop()}</h2>`);
            var Input = require(files[i]);
            var inputObj = new Input('input' + i);
            inputObj.setValue('input' + i);
            response.push(`<div style="padding: 50px; margin: 10px; border: 2px solid #ccc;">${inputObj.toString()}</div>\n`);
        }
        res.end(response.join('<br>'));
    });
});

app.listen(3000);
