const hB = document.getElementById('homeButton');
const gB = document.getElementById('gameButton');
const mB = document.getElementById('musicButton');
const cB = document.getElementById('codeButton');
const nb = document.getElementById('Nav');
const msg = document.getElementById("Message")
const ip = document.getElementById('inputid');
const mc = document.getElementById('learnmc');
const yt = document.getElementById('ytButton');
const film = document.getElementById('filmButton');

const c = "cummies"

document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift' && ip.value === c) {
        nb.style.display = 'flex';
        mc.style.display = "none";
        msg.textContent = "Thanks for being a member! Navigate through the site with the menu above."
    } else {
        nb.style.display = 'none';
        mc.style.display = "block";
        msg.textContent = "Learn Morse Code:"
    }
});

mB.addEventListener('click', function () {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = "https://womginx.tqv.repl.co/main/https://www.spotify.com/";
    win.document.body.appendChild(iframe);
});

yt.addEventListener('click', function () {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = "https://example.com"; /* https://www.youtubeunblocked.live/ */
    win.document.body.appendChild(iframe);
});

film.addEventListener('click', function () {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = "C:/Users/Gav/Desktop/! Projects/IMDB/index.html";
    win.document.body.appendChild(iframe);
});



/*
function btnclick() {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = "file:///home/chronos/u-a6403f850ebd9c9ddd0e13b353dd2da93a78c2d0/MyFiles/Page/unrestricted.html";
    win.document.body.appendChild(iframe);
}
*/