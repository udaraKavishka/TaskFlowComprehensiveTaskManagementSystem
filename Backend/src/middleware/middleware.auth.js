const jwt= require('jsonwebtoken');
const User = require('../models/user.js');

const authentication = async(req,res,next)=>{
    const token= req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Authentication required'});
    }

    try {
        const decodedToken= jwt.verify(token, process.env.SECRET_KEY);
        const user= await User.findById(decodedToken.userId);
        if(!user){
            return res.status(401).json({message:'User not found'});
        }

        req.user=user;
        next();

    } catch (error) {
        res.status(401).json({message:'Invalid token'});
    }
};

module.exports ={authentication };