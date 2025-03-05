const fs = require('fs/promises');
const fsSync = require('fs');

(async() => {
    try {
       if (!fsSync.existsSync('./config')) {
            await fs.mkdir('./config');
       }
       else{
        console.log('El directorio ya existe');
       }

        fs.appendFile('./config/prueba.md', 'Contenido del fichero, hola Fran');
    
    } 
    catch (err) {
        console.log(err.message);
    }
})();