'use strict';

var router = require('express').Router();
module.exports = router;

router.use("/auth", require('./auth.routes.js'));