var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/media', function(req, res) {
  res.render('Prueba', { title: 'Media Player' });
});

module.exports = router;
