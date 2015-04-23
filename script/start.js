/**
* @module scripts/start
*/

'use strict';

var manifest = require('./manifest');
var logger = console;
var os = require('os');
var exec = require('child_process').exec;
var fs = require('fs');
var pathmod = require('path');
var prefix = 'bin/' + manifest.options.version;

var cmd = {
  linux64: prefix + '/linux64/nw',
  linux32: prefix + '/linux32/nw',
  darwin64: prefix + '/osx64/node-webkit.app/Contents/MacOS/node-webkit',
  darwin32: prefix + '/osx32/node-webkit.app/Contents/MacOS/node-webkit',
  win64: pathmod.normalize(prefix + '/win64/nw.exe'),
  win32: pathmod.normalize(prefix + '/win32/nw.exe')
};

var platform = os.platform();
var arch = os.arch().match(/\d+/).toString();
var path = cmd[platform + arch];
var proc = exec(path + ' .');

proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);
