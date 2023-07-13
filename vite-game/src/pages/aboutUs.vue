<template>
  <div class="about-us">
    <h1>About the game</h1>
    <p>Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
    </div>
</template>

<style>
.about-us {
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

.about-us h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.about-us p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>