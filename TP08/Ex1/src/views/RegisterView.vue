<template>
  <div class="style">
    <form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>

      <label for="fname"><b>First name</b></label>
      <input type="text" placeholder="Enter first name" name="fname" required>

      <label for="lname"><b>Last name</b></label>
      <input type="text" placeholder="Enter last name" name="lname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div class="clearfix">
        <button type="submit" class="signup">Sign Up</button>
      </div>
    </div>
  </form>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
