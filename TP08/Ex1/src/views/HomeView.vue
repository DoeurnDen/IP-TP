<template>
    <div>
        This is home page
        <button @click="Logout">  Logout</button>
    </div>
</template>

<script setup>
import {inject}from 'vue'


const route=inject('router')


const id=localStorage.getItem('id')
if(id){
    fetch(`http://localhost:4000/user/isexist`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:id
        })
    }).then(res=>{
        if(res){
            res.json().then(data=>{
                if(!data){
                    route.push('/')
                    
                }
            })  
        }else{
            route.push('/')
        }
    })
    
    
}else{
    route.push('/')
}

const Logout=()=>{
    localStorage.removeItem('id')
    route.push('/')
}
</script>

<style lang="scss" scoped>

</style>