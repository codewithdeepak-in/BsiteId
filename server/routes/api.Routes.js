const express = require('express');
const router = express.Router();
const authRoutes = require('./auth/auth.Routes');

router.use('/v1/auth', authRoutes);

module.exports = router;
