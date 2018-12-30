'use strict';

const events = require('./modules/events.js');
const logger = require('./modules/logger.js');

module.exports = {parse};

function parse(buffer) {
  console.log('in app', {buffer});
  events.emit('parse-buffer', buffer);
}

