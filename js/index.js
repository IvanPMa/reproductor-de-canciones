const playSong = document.getElementsByClassName('play');
const stopSong = document.getElementsByClassName('stop');
const volume = document.querySelector('.volume');
const nameSong = document.querySelector('.name');
let audio;

for(element of playSong){
    element.addEventListener('click', function(){
        let cancion = this.getAttribute('id');
        audio = new Audio(`./audios/${cancion}.mp3`);
        audio.play();
        nameSong.innerHTML = `Reproduciendo ${cancion}`;
    });
}

for(element of stopSong){
    element.addEventListener('click', function(){
        audio.pause();
        nameSong.innerHTML = `Detenido`
    });
}

volume.addEventListener('click',function(){
    let controlVolume = this.value;
    audio.volume = controlVolume;
})
console.log('prueba');