<template>
  <div class="style">
    <form class="modal-content" action="#" @submit.prevent="Register">
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required v-model="email">
        
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required v-model="username">
        
        <label for="fname"><b>First name</b></label>
        <input type="text" placeholder="Enter first name" name="fname" required v-model="firstname">
        
        <label for="lname"><b>Last name</b></label>
        <input type="text" placeholder="Enter last name" name="lname" required v-model="lastname">
        
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password">
        <p v-if="isError" style="width: 100%;background-color: red;text-align: center;color: white; padding: .4rem 0;">{{ msgErr }}</p>
        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
        
        <div class="clearfix">
          <button type="submit" class="signup">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref,inject}from 'vue'

const email=ref('')
const username=ref('')
const firstname=ref('')
const lastname=ref('')
const password=ref('')
const route=inject('router')
const id=localStorage.getItem('id')
const isError=ref(false)
const msgErr=ref('Invalid username or Password')
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

const Register=()=>{
  fetch(`http://localhost:4000/user`,{
    method:"POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       email:email.value,
       username:username.value,
       firstname:firstname.value,
       lastname:lastname.value,
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

<style>

</style>