const mongoose = require('mongoose')
const {schemaOptions}= require('../models/modelOptions.js')
const bcrypt= require('bcryptjs')

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},schemaOptions)

userSchema.pre('save',async function(next){
    const user= this;
    if(!user.isModified('password')) return next();

    try {
        const salt= await bcrypt.genSalt();
        user.password=await bcrypt.hash(user.password,salt);
        next();
    } catch (error) {
        return next(error)
    }
});

userSchema.methods.comparePassword= async function(password){
    return bcrypt.compare(password,this.password);
};

const User= mongoose.model('User',userSchema);

module.exports=User;



