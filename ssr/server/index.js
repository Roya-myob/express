//we load all of the required Babel packages, we handle this in our root index.js
require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');
