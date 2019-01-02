'use strict';

const events = require('./modules/events.js');
const logger = require('./modules/logger.js');

module.exports = {parse, dispatchAction};

events.on('emitting-socket', dispatchAction);

/**
 *
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 */
function dispatchAction(buffer, userId, socketPool) {
  parse(buffer, userId, socketPool);
}

/**
 *
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 */
function parse(buffer, userId, socketPool) {
  events.emit('parse-buffer', buffer, userId, socketPool);
}

