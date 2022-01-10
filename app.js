'use strict';

const express = require('express');

// puts express into a single object
const app = express();

const messages = []

class Message {
  constructor(text, author){
    this.text = text;
    this.author = author;
  }
}



// takes in a route and a callback function that has the request and response
app.get('/message', (request, response) => {
  //do something with request and return response
  console.log(`request - ${request.method}`)

  response.send(messages)

});

// POST -> http://localhost:3000/message?text=test&author=michael
app.post('/message', (request, response) => {
  //do something with request and return response
  const messageText = request.query.text;
  const authorName = request.query.author;

  next('an error has occurred')

  const message = new Message(authorName, messageText);
  messages.push(message);
  response.send(message);

});

module.exports = app;