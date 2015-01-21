var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prueba', function(req, res) {
  res.render('media/Prueba', { title: 'Media Player' });
});

module.exports = router;


