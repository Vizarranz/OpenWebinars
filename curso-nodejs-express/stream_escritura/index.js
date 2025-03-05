const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('¿Cómo te llamas?', (answer) => {
    
    const stream = fs.createWriteStream(`./${answer}.md`);

    //Cargamos directamente el texto que queremos ver en la consola o salida estándar.
    rl.setPrompt('¿Qué quieres escribir? (exit si quieres salir)');
    //Lanzamiento a la consola.
    rl.prompt();    

    //Line se ejecuta cada vez que escribamos algo en la terminal.
    rl.on('line', (data) => {
        if (data.toLowerCase().trim() === 'exit') {
            stream.close();
            rl.close();
        }
        else{
            stream.write(`${data}\n`);
            rl.prompt();
        }
    });
});

rl.on('close', () => {
    console.log('Se termina la escritura'); 
});