const http = require('http');
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path'); // Librería que nos permite trabajar con rutas internas
//  dentro del SO sin tener que preocuparte del SO que estés utilizando

const server = http.createServer(async(req, res) => {
    // En el siguiente condicional estamos comparando que en el caso de que 
    // la url que aparezca no sea la local, que redireccione a la página de error
    // 404.
    if (req.url === '/') {
        const data = await fsPromises.readFile('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }

    else if (req.url.match(/.css$/)) {
        const cssPath = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(cssPath,'utf8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        stream.pipe(res);// Devolución de datos sobre la petición de un archivo.
    }

    else if (req.url.match(/.jpg$/)) {
        const jpgPath = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(jpgPath);
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        stream.pipe(res);// Devolución de datos sobre la petición de un archivo.        
    }

    else {
        // Especificamos el uso de texto plano en la página de error "404"
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000);

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