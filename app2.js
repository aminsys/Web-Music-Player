function page(){
    
    window.location.href = "page.html";
    clearInterval(looper);
    console.log("Looper stopped!");
}

var songs = [
    'assets/sample.mp3',
    'assets/sample2.mp3',
    'assets/sample4.wav',
    'assets/sample3.mp3'
];

function playSong(){
    var randomSong = (Math.floor(Math.random() * 4));
    sample = new Audio (songs[randomSong]);
    sample.play();
    
    var barProg = document.getElementById("bar");
    barProg.style.backgroundColor = 'crimson'; 
    var width = 1;
    var id = setInterval(frame, sample.currentTime);
    function frame() {
        if (width >= 100) {
            barProg.style.backgroundColor = 'limegreen';
            clearInterval(id);
        } else {
            width = (sample.currentTime / sample.duration) * 100; 
            barProg.style.width = width + '%'; 
            document.getElementById('procent').innerHTML = ((sample.currentTime / sample.duration) * 100 | 0) + '%';
        }
    }
}

function stopSong(){
    if (!sample.paused){
        sample.pause();
        console.log('stopping a playing song!');
    }
}
