module.exports = (data)=>{
    let msg=[]
    let isErr=false
    if(!data.email) {msg=[...msg,"email is required"] ; isErr=true}
    if(!data.username) {msg=[...msg,"username is required"]; isErr=true}
    if(!data.firstname) {msg=[...msg,"firstname is required"]; isErr=true}
    if(!data.lastname) {msg=[...msg,"lastname is required"]; isErr=true}
    if(!data.password) {msg=[...msg,"password is required"]; isErr=true}


    return {msg,isErr}

}