const fs = require('fs');

const stream = fs.createReadStream('../ficheros/fichero_grande.md', 'utf-8');

let body = '';

//El método once, se ejecuta la primera vez que recibamos el evento 'data'.
stream.once('data', () => {
    console.log('Empieza la lectura');
    
})

//El método on se todas las veces que recibamos el evento 'data' .
stream.on('data', chunk => {
    console.log('Recibo datos...');
    body += chunk;
});

stream.on('end', () => {
    console.log(`Body: ${body.length}`);
    
});