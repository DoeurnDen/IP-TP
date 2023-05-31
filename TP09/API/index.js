const express = require('express')
const app = express()
const mongoose = require('mongoose');
const userRouter = require('./src/router/user')
require('dotenv').config()

app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile('src/templates/index.html',{root:'./'});
})

app.use('/user',userRouter)

const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.DB_CONNECTION}`);
        console.log("Connected");
    }catch(error){
        console.log("Something when wrong");
        handlerError(error);
    }
}

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server run at http://localhost:${process.env.PORT}`);
})