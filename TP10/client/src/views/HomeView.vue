<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import Login from './LoginView.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div>
    <h1>TheWelcome!!</h1>
    <RouterLink to="/login">Login</RouterLink>
    </div>
    <!-- <Login /> -->
  </main>
  
</template>

<style scoped>
main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
