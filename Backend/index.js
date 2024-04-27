const express= require('express');
const config= require('../Backend/src/config/config.js');
const connectDB= require('../Backend/src/db/dbconfig.js');


const app=express();
const port = process.env.PORT;
// const port =3000;

app.use(express.json());

connectDB.connectDB();

app.listen(config.port,() => {
    console.log(`Server is up at ${config.port}`);
});



