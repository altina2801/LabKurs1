const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const server = http.createServer(app);
const io = socketIO(server);


// Create an instance of the Express application
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'crud_contact',
});

// Register endpoint
app.post('/register', (req, res) => {
  // User registration code goes here
  // ...

  // Example response
  res.status(200).json({ message: 'Registration successful' });
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
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
