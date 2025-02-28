const fs = require('fs/promises');

//Gestionamos el error con la estructura try-catch

async function accionFicheros() {
    try {
        await fs.appendFile('../ficheros/blog.md','\n\nAutor: Wanolo Rodríguez');

        const data = await fs.readFile('../ficheros/blog.md', 'utf-8')
        
        console.log(data);    
    } catch (error) {
        console.log(err);
           
    }    
}

accionFicheros();