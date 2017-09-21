/*
 * Autor: Guihgo
 * Data: 20/09/2017
*/

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app); //cria servidor http utilizando express como intermediador

server.listen(process.env.PORT || 80); //inicia servidor http na porta 80
var socketIo = io.listen(server); //inicia servidor socket utilizando o servidor http criado
console.log('Server http e socket rodando...');

connections = []; //array que guardar as conexões
var msgs = []; //array que guarda as mensagens

app.use(express.static(path.join(__dirname, 'public'))); //deixa public a pasta public - isso é para que o user possa acessar os arquivos estáticos
//Rota para o caminho : 127.0.0.1:80/
app.get('/', function(req, res) { //quando houver requisição nesse caminho
	res.sendFile(path.join(__dirname, 'index.html')); //envia essa página como resposta
});

});
