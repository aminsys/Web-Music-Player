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
    var sample = new Audio (songs[randomSong]);
    sample.play();
}
