const express = require('express');
const { register, login,userProfile } = require('../controllers/controller.auth.js');
const {  regsiterValidation, loginValidation} = require('../middleware/middleware.authvalidation.js');
const verifyToken = require("../middleware/middleware.auth.js") 
const router= express.Router();

router.post('/register',regsiterValidation,register);
router.post('/login',loginValidation, login);
// router.get("/profile/:id", verifyToken, userProfile);

module.exports= router;