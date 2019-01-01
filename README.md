![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## TCP Chat Server

### Author: Becca Lee (paired heavily with Heather Cherewaty and Hannah Ingham)

### Links and Resources
![Build Status](https://www.travis-ci.com/beccalee123/07-tcp-server.svg?branch=master)
* [repo](https://github.com/beccalee123/07-tcp-server)
* [travis](https://www.travis-ci.com/beccalee123/07-tcp-server)

### Modules
- `command.js` holds the various chat commands
- `event.js` holds the event queue
- `logger.js` holds the parse buffer and dispatch action commands
- `app.js` holds event emitters
- `chatroom.js` holds the general server info and socketpool setup


### Setup
#### `.env` requirements
* `PORT` - 3001, or defined by env

#### Running the app
* Run `nodemon` in a terminal window
* In a new tab, run `nc localhost 3001`
* Open new tabs and run `nc localhost 3001` for as many chat users as you'd like to join
* To apply a nickname to the user in that tab, enter `@nick <nickname>`.
* To send a message to the group, enter `@all <message>`
* To send a message to an individual, enter `@dm <username> <message>`
* To exit the chat, hit ctrl c. A quite command for the chat is in progress.
* A list command for the chat is coming soon


#### Tests
* Tests are currently run using jest and Travis. Testing is currently in progress, so I will report back on the official assertions once more have been established.
