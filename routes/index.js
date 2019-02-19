'use strict';

const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('Hello/index');
});

module.exports = router;
