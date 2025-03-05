 const express = require('express');

 // Configuración de ".env"
require('dotenv').config();
 // Instancia preparada para empezar a recibir peticiones y respuestas acordes a estas.
 const app = express();

 // Configuración de la aplicación.
 
 // GET http://localhost:3000/contactos
 app.get('/contactos',(req,res) => {
    res.send('Lista de contactos');
 })

app.post('/usuarios/nuevo', (req, res) => {
    res.send('Nuevo usuario')
})

const PORT = process.env.PORT || 3000; // Con "||" le damos un valor por defecto, en caso de no estar previamente definido.
 app.listen(PORT, () => {
    // Aquí podemos realizar cualquier función que queramos utilizar al inicio de la aplicación.
    console.log(`El servidor está ejecutándose en el puerto ${PORT}.`);
    
 });