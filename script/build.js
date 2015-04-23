/**
* @module scripts/build
*/

'use strict';

var manifest = require('./manifest');
var logger = console;

manifest.on('log', function(msg) {
  logger.info(msg);
});

manifest.build()
  .then(function () {
    logger.info('Build finished!');
  })
  .catch(function(error) {
    logger.error(error);
  });
