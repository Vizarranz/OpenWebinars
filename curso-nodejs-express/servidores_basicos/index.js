const http = require('http');

// Crea un software que reciba las peticiones y 
// permita gestionar respuestas.

// Recibe una función anónima como parámetro y cada vez
// que le entre una petición al servidor, va a ejecutar
// la función anónima.
const server = http.createServer((req, res) => {
    console.log('Método', req.method);
    console.log('Url', req.url);
    console.log('Headers', req.headers);
    res.end('Hola server') // Aquí finaliza la interacción.
});

// En express, se suele utilizar el puerto 3000 normalmente.
server.listen(3000);