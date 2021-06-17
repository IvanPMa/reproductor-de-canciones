const playSong = document.getElementsByClassName('play');
const stopSong = document.getElementsByClassName('stop');
const volume = document.querySelector('.volume');
let audio;

for(element of playSong){
    element.addEventListener('click', function(){
        let cancion = this.getAttribute('id');
        audio = new Audio(`./audios/${cancion}.mp3`);
        audio.play();
    });
}

for(element of stopSong){
    element.addEventListener('click', function(){
        audio.pause();
    });
}

volume.addEventListener('click',function(){
    let controlVolume = this.value;
    audio.volume = controlVolume;
})