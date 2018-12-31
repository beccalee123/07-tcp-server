'use strict';

const logger = require('./logger.js');

const commands = {};


commands['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};

commands['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};

commands['@list'] = (data, userId, socketPool) => {
  // console.log(chatroom.socketArr);
};

commands['@dm'] = (data, userId, socketPool) => {
  // socketPool[userId] = 
};

module.exports = {commands};
