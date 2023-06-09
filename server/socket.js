const {Server} = require('socket.io');

let io;

const initializeSocket = (server) => {
  io = new Server(server)

  io.on('connection', (socket) => {
    console.log('A user connected.');

    socket.on('disconnect', () => {
      console.log('Client disconnected.');
    });
  });
};

const sendMessageIO=(message)=>{
    io.emit('newMessage', message);
    console.log('message sent')
}

module.exports = {
  initializeSocket,
  sendMessageIO,
  io,
};
