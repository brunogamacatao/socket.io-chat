const socket = io(); // importando a lib cliente do socket.io

// acessando os elementos da página
const formulario    = document.getElementById('form_chat');
const campoMensagem = document.getElementById('campo_msg');
const mensagens     = document.getElementById('mensagens');

// quando enviar uma mensagem
formulario.onsubmit = evento => {
  evento.preventDefault();
  socket.emit('mensagem', campoMensagem.value);
  campoMensagem.value = '';
  return false;
};

// quando receber uma mensagem
socket.on('mensagem', mensagem => {
  var item = document.createElement('li'); 
  item.appendChild(document.createTextNode(mensagem));
  mensagens.appendChild(item);
});