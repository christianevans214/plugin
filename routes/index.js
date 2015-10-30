var express = require('express');
var path = require("path");
var router = express.Router();
var BASE_HTML_PATH = path.join(__dirname, '../views/base.html')
/* GET home page. */
router.all('/*', function(req, res, next) {
  res.send("Hey This Is Working")
});

module.exports = router;
