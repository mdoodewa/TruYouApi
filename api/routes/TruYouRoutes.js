const express = require('express');
const router = express.Router();
const TruYouController = require('../controllers/TruYouController');

router.put('/streamdata', TruYouController.update_stream_data);

module.exports = router;