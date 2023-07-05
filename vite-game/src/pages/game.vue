<template>
  <link rel="stylesheet" href="src/style/cardGame.css">
  <div class="container">
    <div class="card-game">
      <h1>Guesser Game!</h1>

      <button style = "background-color: #535bf2;" @click="generateDeckId()">Generate new Deck!</button>
      <br />
      <button @click="() => (guess = 'red')">Guess Red</button>
      <button @click="() => (guess = 'black')">Guess Black</button>

      <h2>Current Guess: {{guess}}</h2>

      <h2>score: {{ score }}</h2>

      <div v-if="guess">
        <button style = "background-color: #535bf2;" @click="drawCard()">draw card</button>
        <br />
        <div v-if="card">
          <img :src = "card.image" alt ="card image">
          <br />
          <button style = "background-color: #535bf2;" @click="() => (card = null)">Try Again!</button>

        </div>
      </div>
    </div>
  </div>


</template>


<script setup>
   import {ref} from "vue";

   //https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
   const deckId = ref('z3w5gr4ohyxu')
   const card = ref()

   const guess = ref();
   const score = ref(0);


   async function generateDeckId(){
     const API = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

     const generatedId = await fetch(API).then((res) => res.json());

     deckId.value = generatedId.deck_id;
   }
   async function drawCard() {

     const API = `https://www.deckofcardsapi.com/api/deck/${deckId.value}/draw/?count=1`

     const data = await fetch(API).then((res) => res.json());

     card.value = data.cards[0];

     evaluateGuess()
   }

   function evaluateGuess(){
     //pulls suit out of the card.value
     const { suit } = card.value

     const colorMatch = {
       red : ['HEARTS', 'DIAMONDS'],
       black: ['SPADES', 'CLUBS']
     }


     return colorMatch[guess.value].includes(suit) ? score.value++ : false ;


   }
</script>