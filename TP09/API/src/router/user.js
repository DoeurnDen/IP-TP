const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt');
const {check_register,check_login} = require('../middleware/check_user_route_req')

router.post('/login',check_login,async(req,res)=>{
    // const user = await User.find({})
    const data = req.body;
    let user = await User.find({
        $or:[
            {ussername: data.EUID},
            {email:data.EUID},
            {_id:data.EUID},
        ]
    })
    if(!user) user = await User.findOne({email:data.EUID})
    if(!user) user = await User.findOne({_id:data.EUID})
    if(!user) return res.status(400).send({"message":"Email or Password invalid"})
     res.json(user)
})

router.post('/Register',async(req,res)=>{
    // console.log(req.body);
    const data = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(data.password,salt)
    const user = new User({
        username:data.username,
        email:data.email,
        password:hashPassword,
        firstname:data.firstname,
        lastname:data.lastname,
    })
    
    try{
        const userSaved = await user.save();
        res.json(userSaved)
    }catch{ 
        res.status(500).send({"Message":"it is not work"})
    }

})


module.exports = router