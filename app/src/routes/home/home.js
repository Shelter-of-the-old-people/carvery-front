const express = require('express');
const router = express.Router();
const controller = require('./home_controller');

// RENDER
router.get('/', controller.render.index);

// PROCESS

module.exports = router;
