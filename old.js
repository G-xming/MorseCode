const audio = document.getElementById('bgm');
const hB = document.getElementById('homeButton');
const gB = document.getElementById('gameButton');
const mB = document.getElementById('musicButton');
const dB = document.getElementById('discordButton');
const cB = document.getElementById('codeButton');
const msg = document.getElementById('Message');

hB.addEventListener('click', function () {
    window.location.href = './index.html';
    console.log('Button clicked!');
});

gB.addEventListener('click', function () {
    window.location.href = './game.html';
    console.log('Button clicked!');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'h' || event.key === 'H') {
        msg.style.display = 'none';
    } else if (event.key === 'g' || event.key === 'g') {
        msg.style.display = 'block';
    }
});

mB.addEventListener('click', function () {
    const audio = document.getElementById('bgm');
    const toggleButton = document.getElementById('musicButton');

    if (audio.paused) {
        audio.play();
        toggleButton.classList.remove('fa-volume-xmark');
        toggleButton.classList.add('fa-volume-high');
        // Add any additional code to indicate that music is now playing
    } else {
        audio.pause();
        audio.currentTime = 0;
        toggleButton.classList.remove('fa-volume-high');
        toggleButton.classList.add('fa-volume-xmark');
        // Add any additional code to indicate that music is now paused
    }
});

dB.addEventListener('click', function () {
    window.location.href = './discord.html';
    console.log('Button clicked!');
});

cB.addEventListener('click', function () {
    window.location.href = './code.html';
    console.log('Button clicked!');
});