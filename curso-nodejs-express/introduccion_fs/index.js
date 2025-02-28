const fs = require('fs');
const fsPromise = require('fs/promises'); //Módulo de promesas

//Síncrona
const files = fs.readdirSync('../ficheros');
console.log('SYNC',files);

//Asíncrona con callback
fs.readdir('../ficheros', (err, files) => {
    console.log(err);
    console.log('ASYNC',files);
});

//Asíncrona con promesas
fsPromise.readdir('../ficheros')
.then(files => console.log('PROMISE',files))
.catch(err => console.log(err));

// Async-await
(async () => {
    const filesP = await fsPromise.readdir('../ficheros');
    console.log(filesP);
})(); //Función autoejecutable
