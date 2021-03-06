'use strict';

// First Party Modules
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;
const server = net.createServer();
const socketPool = {};
const commands = {};

// Module files
const app = require('./app.js');
const logger = require('./modules/logger.js');
const events = require('./modules/events.js');


server.on('connection', (socket) => {
  let id = uuid();
  socketPool[id] = {
    id:id,
    nickname: `User-${id}`,
    socket: socket,
  };
  // let socketArr = [];
  // socketArr.push(socketPool[id].nickname);
  socket.on('data', (buffer) => events.emit('emitting-socket', buffer, id, socketPool));
  // console.log(socketPool);
});

// console.log(socketArr);

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});

// module.exports = {socketArr};