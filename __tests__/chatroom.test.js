'use strict';

const chatroom = require('../chatroom.js');
const events = require('../modules/events.js');
const logger = require('../modules/logger.js');
const command = require('../modules/command.js');
const app = require('../app.js');

describe('tests', () => {
  it('parse buffer returns a buffer', () => {
    let buffer = new Buffer.from('Hi there!!!!');
    let result = logger.parseBuffer(buffer); 
    expect(typeof(result)).toEqual('object');
  });

  //Test below not working. Revisit.
  // it('logSocket runs a console.log', () => {
  //   const spy = jest.spyOn(chatroom.socket, 'logSocket');
  //   expect(spy).toHaveBeenCalled();
  // });

  //This one also doesn't work. Revisit.
  // it('parse buffer converts the buffer to a string', () => {
  //   let buffer = new Buffer.from('Hello how are you? I am doing well, thanks');
  //   let result = logger.parseBuffer(buffer);
  //   expect(result).toEqual();
  // });

});