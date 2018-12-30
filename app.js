'use strict';

const events = require('./modules/events.js');
const logger = require('./modules/logger.js');

module.exports = {parse, dispatchAction};

events.on('emitting-socket', dispatchAction);

function dispatchAction(buffer, userId, socketPool) {
  parse(buffer, userId, socketPool);
}

function parse(buffer, userId, socketPool) {
  // console.log('in app', {buffer});
  events.emit('parse-buffer', buffer, userId, socketPool);
}

