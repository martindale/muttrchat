/**
* @module scripts/bundle
*/

'use strict';

var path = require('path');
var manifest = require('./manifest');
var about = require('../package');
var logger = console;
var fs = require('fs');
var exec = require('child_process').exec;

logger.info('preparing compressed archives of current build...');

var buildPath = './dist/muttrchat';

var buildDirs = fs.readdirSync(buildPath).filter(function(filename) {
  return fs.statSync(buildPath + '/' + filename).isDirectory();
});

process.chdir(buildPath);
logger.info('cwd is %s', process.cwd());

buildDirs.forEach(function(buildDir) {
  var platform = path.basename(buildDir);
  var archivePath = 'muttrchat-v' + about.version + '-' + platform;
  var cmd;

  if (['linux64', 'linux32'].indexOf(platform) !== -1) {
    cmd = 'tar czf ' + archivePath + '.tar.gz ' + buildDir  + '/**';
  } else {
    cmd = 'zip -r ' + archivePath + '.zip ' + buildDir + '/**';
  }

  logger.info('exec `%s`', cmd);

  var proc = exec(cmd);

  proc.on('data', logger.info);
  proc.on('error', logger.error);
});
