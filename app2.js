function page(){
    
    window.location.href = "page.html";
    clearInterval(looper);
    console.log("Looper stopped!");
}

var songs = [

    'assets/songs/08 - Fushigi Purupuru Pururin Rin!.mp3',
    'assets/songs/03 - Shizukeganuma.mp3',
    'assets/songs/04. 刃.mp3'
];

var songTitle = [
    'Fushigi Pururpuru Pururin Rin', 'Shizukeganuma', 'Yaiba'
];
// console.log(songs.length);

function playSong(){
    var randomSong = (Math.floor(Math.random() * songs.length));
    document.getElementById('songTitle').innerHTML = songTitle[randomSong];
    sample = new Audio (songs[randomSong]);
    sample.play();
    document.getElementById('audioP').disabled = true;
    console.log(randomSong + ' ' + songTitle[randomSong]);
    
    var barProg = document.getElementById("bar");
    barProg.style.backgroundColor = 'crimson'; 
    var width = 1;
    var id = setInterval(frame, sample.currentTime);
    function frame() {
        if (width >= 100) {
            barProg.style.backgroundColor = 'limegreen';
            document.getElementById('timeLeft').style.color = 'limegreen';
            clearInterval(id);
        } else {
            width = (sample.currentTime / sample.duration) * 100; 
            barProg.style.width = width + '%'; 
            // document.getElementById('timeLeft').innerHTML = ((sample.currentTime / sample.duration) * 100 | 0) + '%';
            document.getElementById('timeLeft').innerHTML = (sample.duration / 60).toFixed(0) + ':' + (sample.duration % 60).toFixed(0) + ' - ' + (sample.currentTime / 60).toFixed(0) + ':' + (sample.currentTime % 60).toFixed(0);
        }
    }
}

function stopSong(){
    document.getElementById('audioP').disabled = false;
    sample.pause();
}
