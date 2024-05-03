const express= require('express');
const config= require('../Backend/src/config/config.js');
const connectDB= require('../Backend/src/db/dbconfig.js');
const authRoutes = require('../Backend/src/routes/auth.routes.js');



const app=express();
const port = process.env.PORT;
// const port =3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


connectDB.connectDB();

app.use('/api/auth',authRoutes);

app.listen(config.port,() => {
    console.log(`Server is up at ${config.port}`);
});