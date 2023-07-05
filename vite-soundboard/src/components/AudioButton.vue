<template>
  <audio :src="`./sounds/${sound}.wav`" controls ref="audioTag" @ended = "ended"></audio>
  <button @click="playsound" class="{playing: isPlaying}">{{sound}}</button>

  <div></div>
</template>


<script setup>
  import {ref} from "vue";

  const audioTag = ref();
  const isPlaying = ref(false)
  const props = defineProps(["sound"]);

  const playsound =() =>{
    isPlaying.value = true
    audioTag.value.play()
  }

  const ended =() =>{
   isPlaying.value = false;

  }
</script>
