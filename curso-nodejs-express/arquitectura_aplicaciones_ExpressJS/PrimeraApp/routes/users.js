const router = require('express').Router();

router.get('/',(req,res) => {
  res.send('Lista de usuarios');
});

router.get('/edit',(req,res) => {
  res.send('Formulario de edición');
});

router.post('/update',(req,res) => {
  res.send('Gestión del formulario');
});

module.exports = router;
