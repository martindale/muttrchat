/**
* @module scripts/manifest
*/

'use strict';

var Builder = require('node-webkit-builder');
var about = require('../package');

module.exports = new Builder({
  files: [
    './**',
    '!./bin/**',
    '!./dist/**',
    '!./coverage/**',
    '!./node_modules/chai/**',
    '!./node_modules/coveralls/**',
    '!./node_modules/istanbul/**',
    '!./node_modules/mocha/**',
    '!./node_modules/node-webkit-builder/**',
    '!./node_modules/sinon/**'
  ],
  platforms: [
    'osx64',
    'linux64',
    'linux32',
    'win64',
    'win32'
  ],
  version: '0.11.6',
  appName: about.name,
  appVersion: about.version,
  buildDir: './dist',
  cacheDir: './bin',
  buildType: 'default',
  forceDownload: false,
  // macCredits: '',
  macIcns: 'src/img/muttr.icns',
  macZip: false,
  macPlist: {},
  winIco: 'src/img/muttr.ico'
});
