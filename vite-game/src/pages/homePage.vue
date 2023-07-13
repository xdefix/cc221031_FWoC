<template>
  <div class="container">
    <h1>Welcome to a simple game!</h1>
    <p>Thank you for visiting!</p>
  </div>
</template>

<style>
.container {
  border: 1px solid black;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  background-color: #171717;
  color: #00ff00;
  filter: drop-shadow(0 0 5px #00ff00);
  transition: filter 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
  margin-top: 20px;
}

h1 {
  font-size: 40px;
  color: #fff;
}

p {
  margin-bottom: 5px;
  padding: 5px;
  color:#fff ;
}
</style>