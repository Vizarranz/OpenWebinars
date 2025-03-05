const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET') {
        // Retornar el formulario
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./public/formulario.html','utf-8').pipe(res);
    }
    else if (req.method === 'POST') {
        // Gestionar el valor del formulario
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.end(body);
        })
    }

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
process.on('SIGINT', shutdown);