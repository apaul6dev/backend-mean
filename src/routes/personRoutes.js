const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController');

router.get('/', controller.getPersons);

module.exports = router;
