const express= require('express');
const {authentication}= require('../middleware/middleware.auth.js');

const router= express.Router();

router.get('/profile',authentication,(req,res)=>{
    res.json({message: `Welcome ${req.user.username}`});
});

module.exports= router; 