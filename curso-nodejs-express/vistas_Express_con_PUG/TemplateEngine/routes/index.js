var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'Wanolo',
    available: false,
    animals: ['wanperro', 'pezqueñines']
  });
});

module.exports = router;
