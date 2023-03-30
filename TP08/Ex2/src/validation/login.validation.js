module.exports = (data)=>{
    let msg=[]
    let isErr=false
    if(!data.EUID) {msg=[...msg,"email is required"] ; isErr=true}
    if(!data.password) {msg=[...msg,"password is required"]; isErr=true}


    return {msg,isErr}

}