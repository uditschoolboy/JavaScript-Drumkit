const audioElements = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key');
window.addEventListener("keydown", (e) => {
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(key.getAttribute('data-key') === e.key) {
            keyPressed(key);
        }
    }
    for(let i = 0; i < audioElements.length; i++) {
        let audioElement = audioElements[i];
        if(audioElement.getAttribute('data-key') === e.key) {
            playAudio(audioElement);
        }
    }
});

function keyPressed(key) {
    key.classList.add('keypress');
    setTimeout(() => {
        key.classList.remove('keypress');
    }, 200);
}

function playAudio(audioElement) {
    audioElement.play();
}