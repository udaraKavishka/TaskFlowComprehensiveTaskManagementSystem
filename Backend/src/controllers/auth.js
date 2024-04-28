const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

const register= async(req,res,next)=>{
    const {username,password}=req.body;

    try {
        const hashedPassword= await bcrypt.hash(password,10);
        const user= new User({username,password:hashedPassword});
        await user.save();
        res.json({message:'Registration successful'});
    } catch (error) {
        next(error);
    }
};


const login= async(req,res,next)=>{
    const {username,password}=req.body;

    try {
        const user= await User.findOneAndUpdate({username});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        const passwordMatch= await user.comparePassword(password);
        if(!passwordMatch){
            return res.status(401).json({message:'Invalid Password'});
        }

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn:'1 hour'
        });
        res.json({token});
    } catch (error) {
        next(error);
    }
}


module.exports={register,login};
