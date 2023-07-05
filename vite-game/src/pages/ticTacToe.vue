<template>
    <div>
      <h2>Tic Tac Toe</h2>
      <div class="board">
        <div class="cell" v-for="(cell, index) in board" :key="index" @click="makeMove(index)">
          {{ cell }}
        </div>
      </div>
      <div class="status">
        <p>{{ statusMessage }}</p>
        <p>Player 1 Wins: {{ player1Wins }}</p>
        <p>Player 2 Wins: {{ player2Wins }}</p>
      </div>
      <button @click="resetGame">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPlayer: "X",
        board: Array(9).fill(""),
        gameEnded: false,
        player1Wins: 0,
        player2Wins: 0,
      };
    },
    computed: {
      statusMessage() {
        if (this.gameEnded) {
          return "Game Over!";
        } else {
          return "Current Player: " + this.currentPlayer;
        }
      },
    },
    methods: {
      makeMove(index) {
        if (this.board[index] === "" && !this.gameEnded) {
          this.board.splice(index, 1, this.currentPlayer);
          if (this.checkWin(this.currentPlayer)) {
            this.gameEnded = true;
            if (this.currentPlayer === "X") {
              this.player1Wins++;
            } else {
              this.player2Wins++;
            }
          } else if (this.board.every((cell) => cell !== "")) {
            this.gameEnded = true;
          } else {
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
          }
        }
      },
      resetGame() {
        this.currentPlayer = "X";
        this.board = Array(9).fill("");
        this.gameEnded = false;
      },
      checkWin(player) {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        return winConditions.some((condition) => {
          return condition.every((cellIndex) => {
            return this.board[cellIndex] === player;
          });
        });
      },
    },
  };
  </script>
  
  <style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .cell {
    border: 1px solid black;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
  }
  
  .status {
    margin-top: 10px;
  }
  </style>
  