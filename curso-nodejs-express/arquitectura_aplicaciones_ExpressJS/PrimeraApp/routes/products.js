const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('Recuperamos todos los productos');
});

router.get('/new', (req,res) => {
    res.send('Formulario para crear un nuevo producto');
});

router.post('/create', (req,res) => {
    res.send('Gestión de los datos del formulario');
});

module.exports = router;