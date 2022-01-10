'use strict';

const server = require('./app.js');

server.listen(3000, () => {
  console.log('server listening on port 3000')
});