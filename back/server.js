const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Socket.IO event listeners
io.on('connection', (socket) => {
  console.log('A client has connected');

  // Handle incoming messages
  socket.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
