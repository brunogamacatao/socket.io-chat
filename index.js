const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => { // o socket representa o cliente
  console.log('um novo usuario está conectado 😄');

  socket.on('disconnect', () => {
    console.log('um usuário desconectou 😞');
  });

  socket.on('mensagem', msg => {
    io.emit('mensagem', msg); // broadcast
  });  
});

http.listen(3000, () => console.log('listening on *:3000'));