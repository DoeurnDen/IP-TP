<script setup>
import {ref,inject}from 'vue'


const route=inject('router')
const euid=ref('')
const password=ref('')
const isError=ref(false)
const msgErr=ref('Invalid username or Password')
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
                if(data){
                    route.push('/home')
                    
                }
            })
        }
    })
    
    
}




const login=()=>{
  fetch(`http://localhost:4000/user/login`,{
    method:"POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      EUID:euid.value,
      password:password.value
    })
  }).then(res=>res.json())
  .then(data=>{
    if(data.user){
      localStorage.setItem('id',data.user.id)
      route.push('/home')

    }else{
      isError.value=true
      msgErr.value=data.msg ?? 'Invalid email or Password'
    }
  })
}

</script>

<template>
  <div class="style">
    <form action="#" method="post" @submit.prevent="login">
      <div class="imgcontainer">
        <img src="https://www.w3schools.com/w3css/img_avatar2.png" alt="Avatar" class="avatar">
      </div>

      <div class="container">
        
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required v-model="euid">

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password">
        <p v-if="isError" style="width: 100%;background-color: red;text-align: center;color: white; padding: .4rem 0;">{{ msgErr }}</p>

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>

      <div class="container" style="background-color:#f1f1f1">
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</template>

<style>
  .style{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  form {
    width: 50rem;
    height: 100%;
    border: 3px solid #f1f1f1;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  /* Set a style for all buttons */
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}

</style>
