<template>
  <h1>Soundboard</h1>

  <div>
<!--    v-bind or ":" is used when we want to interfer with an attribute-->
    <AudioButton v-for="sound in sounds" :sound="sound"/>
  </div>

</template>

<script setup>
  // While use vite we dont have to create the other elements since its being done for us

  import AudioButton from "./components/AudioButton.vue";

  const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

</script>