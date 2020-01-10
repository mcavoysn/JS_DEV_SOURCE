
import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
console.log (chalk.red('Running srcServer.js...'));

var path = require('path');


var open = require('open');
const compiler = webpack(config);
const port = 3000;
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    var url = path.join(__dirname, '../src/index.html');
    console.log (chalk.red('Sending ' + url + ' to the browser!'));
    res.sendFile(url);
});

app.get('/users', function(req, res){
    res.json([
        {"id": 1, "firstName":"BobY","lastName":"SmithY","email":"bob@gmail.com"},
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


/*
console.log (chalk.red('srcServer.js - 5'));
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

console.log (chalk.red('srcServer.js - 6'));
*/
