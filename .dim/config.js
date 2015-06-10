'use strict';

var path = require('path');

module.exports = {
  orgiRepo: 'ftlabs/fastclick',
  ref: 'v1.0.4',
  target: path.resolve(__dirname, '..'),
  name: 'fastclick',
  repo: 'dim-team/fastclick',
  description: 'a dim-installable fork of ftlabs/fastclick',
  main: {
    'fastclick.js': 'lib/fastclick.js'
  }
};