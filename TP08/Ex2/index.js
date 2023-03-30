const express = require('express')
const app=express()
const user = require('./src/route/user')
var cors = require('cors')
const Port=4000
app.use(express.json()); 
app.use(cors())
app.get('',(req,res)=>{
    res.json({
        msg:"Hello worlds"
    })
})


app.use('/user',user)

app.listen(Port ?? 3000,()=>{
    console.log(`server running successfull on http://localhost:${Port}`)
})