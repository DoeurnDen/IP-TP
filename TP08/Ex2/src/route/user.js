const express = require('express')
const router = express.Router()
const {users} = require('../db/db')
const {registerValidation,loginValidation,idValidation} = require('../validation/validation')
router.post('',(req,res)=>{
    const user=new users()
    const validation=registerValidation(req.body)
    if(validation.isErr) res.json(validation.msg)
    else{
        const newuser=user.register(
            req.body
            )
        res.json(
            newuser)
    }

})
router.post('/login',(req,res)=>{
    const user=new users()
    const validation=loginValidation(req.body)
    if(validation.isErr) res.json(validation.msg)
    else{
        const newuser=user.login(
            req.body
            )
        res.json(
            newuser)
    }
})


router.post('/isexist',(req,res)=>{
    const user=new users()
    const validation=idValidation(req.body)
    if(validation.isErr) res.json(validation.msg)
    else{
        const newuser=user.getMe(
            req.body.id
            )
        res.json(
            newuser)
    }
})

module.exports = router