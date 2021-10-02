const { app } = require('electron');
const express = require('express');
const server = express();
const http = require('http').Server(server);
const io = require('socket.io')(http);
const open = require('open');

server.use('/', express.static(`${ __dirname }/public`));

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    app.quit();
  });
});

http.listen(3000, '0.0.0.0');

open('http://localhost:3000', {
  app: open.apps.chrome
});