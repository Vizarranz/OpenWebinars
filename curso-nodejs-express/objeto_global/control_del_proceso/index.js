//argv Nos devuelve los argumentos extra
//que le pasamos más la ruta de ejecución de Node
//y el fichero en formato array
//console.log( process.argv);

function getParam(param) {
    const index = process.argv.indexOf(param);
    return index === -1 ? null : process.argv[index + 1];
}

//Me devuelve el contenido del array que coincida con el nombre
const nombre = getParam('--nombre');
// console.log(nombre);

//Me devuelve el contenido del array que coincida con la edad
const edad = getParam('--edad');
// console.log(edad);

if (nombre && edad) {
    console.log(`El nombre es ${nombre} y la edad es ${edad}.`)
}
else{
    console.log('Alguno de los valores es nulo.');
}