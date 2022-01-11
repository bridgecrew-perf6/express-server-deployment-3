'use strict';

const server = require('./app.js');

const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log('server listening on port 3000');
// });

server.start(PORT);