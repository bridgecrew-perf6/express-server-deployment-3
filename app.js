'use strict';

const express = require('express');

// puts express into a single object
const app = express();

const messages = [];

class Message {
  constructor(text, author){
    this.text = text;
    this.author = author;
  }
}



// takes in a route and a callback function that has the request and response
app.get('/message', (request, response) => {
  //do something with request and return response
  console.log(`request from client - ${request.method}`);

  response.send(messages);

});

function createMessage(req, res, next) {
  const messageText = req.query.text;
  const authorName = req.query.author;

  console.log('First Message Created!');

  if (!messageText || !authorName) {
    next('Missing Information');
  } else {
    const message = new Message(messageText, authorName);

    //cnanging the request to what we want it to now be
    req.message = message;
    next();
  }
}

function saveMessage(req, res, next) {
  console.log('any data that was added to the request', req.message);
  let message = req.message;
  messages.push(message);
  next();
}

// POST -> http://localhost:3000/message?text=test&author=michael
app.post('/message', createMessage, saveMessage, (request, response, next) => {
  //do something with request and return response
  // const messageText = request.query.text;
  // const authorName = request.query.author;

  // const message = new Message(messageText, authorName);
  // messages.push(message);
  response.send(messages);

});

app.use = (err, req, res, next) => {
  console.log(err);
  res.send('error handler hit');
};

// runs only if no others from above can
app.use = (req, res) => {
  res.status(404).send('couldnt find anythin');
};

//module.exports = app;
module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  },
  app,
};