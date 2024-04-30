const express = require('express');
const { register, login } = require('../controllers/controller.auth.js');
const {  regsiterValidation, loginValidation} = require('../middleware/middleware.authvalidation.js');

const router= express.Router();

router.post('/register',regsiterValidation,register);
router.post('/login',loginValidation, login);

module.exports= router;