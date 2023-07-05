//1. Render audio text on screen
// const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

// sounds.forEach((sound) => {

//     const audio = document.createElement('audio');
//     audio.setAttribute('src', `/sounds/${sound}.wav`);
//     audio.setAttribute('controls', true);

//     document.getElementById('audios').append(audio);
// });


//2. Render a button for each audio tag

//3. Connect a button to a audio tag to play a sound

//3.1. Set a click event on a button
//3.2. Reference to audio tag
//3.3. Based on the click you call `audio.play()` on the element


// sounds.forEach((sound) => {
//     let button = document.createElement('button')
//     let audio = document.createElement('audio')
//     button.innerHTML = sound;
//     button.addEventListener(audio.play());
//     audio.setAttribute("src", `./sound/${sound}.wav`)
//     document.getElementById('audios').append(audio)
//     document.getElementById('buttons').append(button);
// });


import { creatAudioElement, creatButton } from "/html.js";


const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];


sounds.forEach(sound => {
    const audio = creatAudioElement(sound)
    const button = creatButton(sound)


    button.addEventListener("click", () => {
        button.classList.add('playing');
        audio.play()
    })

    audio.addEventListener("ended", () => {
        button.classList.remove("playing");
    })

    document.getElementById('audios').append(audio);
    document.getElementById('buttons').append((button))
})
