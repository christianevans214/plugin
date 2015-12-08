var express = require('express');
var path = require("path");
var router = express.Router();
var BASE_HTML_PATH = path.join(__dirname, '../views/base.html')

router.use('/api', require("./api/index.js"));

/* GET home page. */
router.all('/*', function(req, res, next) {
  res.sendFile(BASE_HTML_PATH)
});

module.exports = router;
