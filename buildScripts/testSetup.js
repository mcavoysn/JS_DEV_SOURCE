// Register babel to transpile before out tests run.
require('babel-register')();

// Disable webpack featres that Mocha doesn't  understand.
require.extensions['.css'] = function() {};
