
import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';


/* eslint-disable no-console */
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

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:'  + port);
    }

});


