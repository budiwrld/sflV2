const song = document.querySelector('#song');
const songArtist = document.querySelector('.song-artist');
const songTitle = document.querySelector('.song-title');
const progressBar = document.querySelector('#progress-bar');
const pPause = document.querySelector('#play-pause');

let playing = false;
let songIndex = 0;
const songs = ['./assets/music/Ghettoflunssa.mp3', './assets/music/Lately.mp3', './assets/music/Tuu.mp3', './assets/music/FlyHigh.mp3'];
const songArtists = ['Duski', 'Sh4dove', 'DANN¥ & AbiShake ft. Sh4dove', 'DANN¥ & AbiShake'];
const songTitles = ['Ghettoflunssa', 'Lately', 'Tuu', 'Fly High'];

const autoplay = song.hasAttribute('autoplay');
if (autoplay) {
    playing = true;
    pPause.src = './assets/icons/pause.png';
}

function playPause() {
    if (playing) {
        pPause.src = './assets/icons/play.png';
        song.pause();
        playing = false;
    } else {
        pPause.src = './assets/icons/pause.png';
        song.play();
        playing = true;
    }
}

song.addEventListener('ended', function () {
    nextSong();
});

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    song.src = songs[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    song.play(); 
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    song.src = songs[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    song.play(); 
}