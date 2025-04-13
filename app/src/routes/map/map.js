const express = require('express');
const router = express.Router();
const controller = require('./map_controller.js');

// RENDER
router.get('/', controller.render.index);

// PROCESS

module.exports = router;
