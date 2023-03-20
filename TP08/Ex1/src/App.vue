<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/image/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <!-- <HelloWorld msg="Welcome"/> -->

      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  /* img{
    margin-top: 10%;
  } */
  nav{
    display: flex;
    gap: 20px;
  }
</style>
