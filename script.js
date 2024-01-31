let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    let songImg = document.querySelector('.song-img');

    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        songImg.style.animationPlayState = 'paused';
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        songImg.style.animationPlayState = 'running';
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}


// Rotate the image when the song is playing

const songImg = document.querySelector('.song-img');
songImg.style.animationPlayState = 'paused';

songImg.addEventListener('animationiteration', () => {
  if (song.paused) {
    songImg.style.animationPlayState = 'paused';
  }
});