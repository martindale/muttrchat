/**
* @module scripts/download
*/

'use strict';

var logger = console;
var manifest = require('./manifest');

manifest.on('log', function(msg) {
  logger.info(msg);
});

manifest.checkFiles().bind(manifest)
  .then(manifest.resolveLatestVersion)
  .then(manifest.checkVersion)
  .then(manifest.platformFilesForVersion)
  .then(manifest.downloadNodeWebkit)
  .then(function (info) {
    logger.info('finished downloading nw package');
  })
  .catch(function (error) {
    logger.error(error);
  });
