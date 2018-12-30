'use strict';

const events = require('./events.js');
const app = require('../app.js');

const commands = {};

events.on('parse-buffer', parseBuffer);
events.on('accept-buffer', dispatchCommand);

module.exports = { parseBuffer, dispatchCommand };

function parseBuffer(buffer, userId, socketPool) {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) { return null; }
  let [command, payload] = text.split(/\s+(.*)/);
  let [target, message] = payload.split(/\s+(.*)/);
  events.emit('accept-buffer', { command, payload, target, message }, userId, socketPool);
}

function dispatchCommand(entry, userId, socketPool) {
  if (entry && typeof commands[entry.command] === 'function') {
    commands[entry.command](entry, userId, socketPool);
  }
}

commands['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};

// commands['@quit'] = (data, userId, socketPool) => {
//   socketPool[connection]; 
// }