const router = require('express').Router();

router.get('/', (req,res) => {
    const { page = 1 , limit = 10 } = req.query
    //console.log(req.query); En req.query tenemos un objeto con tantas claves como nosotros estemos enviando en la petición.
    console.log(page, limit);
    console.log('CurrDate', req.currentDate);
    res.status(503).send('Recuperamos todos los productos');
});

router.get('/new', (req,res) => {
    // res.json({uno: 'uno', dos:'dos'}); Devuelve un json
    res.download('./files/imagenes.zip') // Forzar la descarga de un fichero
});

router.get('/:productId',(req,res) => {
    const { productId } = req.params;
    // req.params recibe todos los valores dinámicos que coloquemos en la URL
    // Es decir, un objeto con tantas claves como valores dinámicos tengamos en la URL y cada valor asociado
    // a esa clave será el valor que tenemos en "/:productId".
    
    res.send(`Recupero el producto con ID: ${productId}`);
});

router.post('/create', (req,res) => {
    const { name, price } = req.body; // Destructuring de los datos que nos llegan en el body
    console.log(name, price);// Objeto que estamos recibiendo
    
    res.send('Gestión de los datos del formulario');
});

module.exports = router;