module.exports = (data)=>{
    let msg=[]
    let isErr=false
    if(!data.id) {msg=[...msg,"invalid id"] ; isErr=true}


    return {msg,isErr}

}