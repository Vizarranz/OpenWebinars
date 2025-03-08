#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('chat:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
// Aquí trabaja socket.io
const io = require('socket.io')(server);

io.on('connection', (socket) => {// Este evento se va a lanzar cada vez que un cliente se conecte al servidor.
  console.log('Se ha conectado un nuevo cliente');
  socket.broadcast.emit('mensaje_chat', {
    usuario: 'INFO',
    mensaje: 'Se ha conectado un nuevo usuario'
  });// Emite a todos menos al socket sobre el que se realiza el propio broadcast.
  
  io.emit('num_clientes', io.engine.clientsCount);

  socket.on('mensaje_chat', data => {
    io.emit('mensaje_chat', data);
  });

  socket.on('disconnect', () => {// Se ejecuta SÓLO si uno de los sockets se desconecta.
    io.emit('num_clientes', io.engine.clientsCount);
    io.emit('mensaje_chat', {
      usuario: 'INFO',
      mensaje: 'Se ha desconectado un cliente'
    });
  });
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
