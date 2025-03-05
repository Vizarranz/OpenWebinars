const http = require('http');

// Cargamos los datos del fichero a la variable data.
const data = require('./public/productos.json');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(3000);

console.log('El servidor se está ejecutando en el puerto 3000');

// Manejo del cierre del servidor
const shutdown = () => {
    console.log('Cerrando servidor...');    
    server.close(() => {
        console.log('Servidor cerrado');
        process.exit(0);// Salimos del proceso de cerrado del servidor
    });
}

//Captura del cierre del servidor y disparar los eventos.
process.on('SIGINT', shutdown);// Señal enviada cuando se presiona Ctrl+C
process.on('SIGTERM', shutdown);// Señal enviada cuando se solicita la terminación de un proceso desde otro como "kill"