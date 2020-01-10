
import express from 'express';
import chalk from 'chalk';
import compression from 'compression';


/* eslint-disable no-console */
console.log (chalk.red('Running distServer.js...'));

var path = require('path');
var open = require('open');

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
    var url = path.join(__dirname, '../dist/index.html');
    console.log (chalk.red('Sending ' + url + ' to the browser!'));
    res.sendFile(url);
});

app.get('/users', function(req, res){
    res.json([
        {"id": 1, "firstName":"BobX","lastName":"SmithX","email":"bob@gmail.com"},
        {"id": 2, "firstName":"Tammy","lastName":"Norton","email":"tnorton@gmail.com"},
        {"id": 3, "firstName":"Tina","lastName":"Lee","email":"tina@gmail.com"},
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:'  + port);
    }

});

