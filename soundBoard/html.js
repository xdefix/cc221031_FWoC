import { nanoid } from 'https://cdn.skypack.dev/pin/nanoid@v4.0.2-yqkBrUTgiH6nlSQz7z2D/mode=imports/optimized/nanoid.js';


export function creatAudioElement(sound){
    const audio = document.createElement('audio');

    audio.setAttribute('src', `/sounds/${sound}.wav`);
    audio.setAttribute('controls', true);
    audio.setAttribute("preload", "auto")
    audio.setAttribute("id", nanoid(10))

    return audio;
}

export function creatButton(sound){
    const button = document.createElement('button');

    button.innerText =sound;

    return button;
}