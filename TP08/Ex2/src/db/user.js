const fs = require("fs");
var uniqid = require('uniqid'); 

module.exports= class user{
    
    constructor(){
        this.path="./src/json"
    }
    
    
    read(){
        const content = fs.readFileSync(`${this.path}/users.json`);
        return  (JSON.parse(content.toString()));
    }
    isEmailValid(email){
        const oldUser=this.read()
        
        for(let i=0;i<oldUser.length;i++){
            if(email==oldUser[i].email){
                return false
            }
        }
        return true
    }
    
    isUsernameValid(username){
        const oldUser=this.read()
        for(let i=0;i<oldUser.length;i++){
            if(username==oldUser[i].username){
                return false
            }
        }
        
        return true
    }
    register(data){
        const oldUser=this.read()
        data.id=uniqid()
        if(!this.isEmailValid(data.email) || !this.isUsernameValid(data.username)) return {msg:"Credentail already token"}
        fs.writeFile(`${this.path}/users.json`, JSON.stringify([...oldUser,data]), err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })
        delete data.password
        return {
            user:data,
            msg:"Register successful"
        }
    }
    getByEUID(EUID){
        const oldUser=this.read()
        for(let i=0;i<oldUser.length;i++){
            if(EUID==oldUser[i].username || EUID==oldUser[i].email){
                return oldUser[i]
            }
        }
    }
    login(data){
        const oldUser=this.read()
        const user=this.getByEUID(data.EUID)
        // console.log(user);
        if(!user) return {msg:"Username or password invalid"}

        if(user.password!=data.password) return {msg:"Username or password invalid"}
        delete user.password
        return {
            user:user,
            msg:"Login successful"
        }
    }
    getMe(id){
        const oldUser=this.read()
        for(let i=0;i<oldUser.length;i++){
            if(id==oldUser[i].id){
                delete oldUser[i].password
                return oldUser[i]
            }
        }
    }
}