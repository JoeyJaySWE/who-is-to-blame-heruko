const http = require('http');
const httpServer = http.createServer();
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

const port = process.env.PORT || 8000;

io.on('connection', (socket) => {
  console.log('Connected to the socket server');
});

httpServer.listen(port, () => {
  console.log('Server started up');
});
