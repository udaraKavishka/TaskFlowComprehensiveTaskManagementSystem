const mongoose = require("mongoose");
require('dotenv').config();
//const config= require('../config/config.js');
// const url= "mongodb+srv://admin123:6vN2U1skGY8BbLiS@cluster0.occgk0c.mongodb.net/?retryWrites=true&w=majority";
const url= process.env.MONGODB_URI;

const connectDB = () => {
    mongoose.connect(url, {
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
        // useCreateIndex:true,
        // useFindAndModify:false
    }).then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log("DB Connection Error: ", err);
    });
}

module.exports={
    connectDB
} 
