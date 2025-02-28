//No es necesario utilizar las extensiones de los archivos.
const operaciones = require('./operaciones');
const Persona = require('./persona');

//Destructuring: traer sólo las funciones que nos interesen.
// const { mult } = require('./operaciones');
//const multiplicacion = mult(5, 3);
//En este caso no es necesaria la llamada al objeto operaciones
//debido a que ya estamos usando únicamente la función "mult" 

const multiplicacion = operaciones.mult(5, 3);

console.log(multiplicacion);

const pers = new Persona('Wanolo', 'Martín', 33);
console.log(pers.mostrar());