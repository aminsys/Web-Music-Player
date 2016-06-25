function page(){
    
    window.location.href = "page.html";
    clearInterval(looper);
    console.log("Looper stopped!");
}

var songs = [

    'assets/beyonce/crzy_n_luv.mp3',
    'assets/beyonce/gul.mp3',
    'assets/beyonce/halo.mp3',
    'assets/beyonce/independent_wmn.mp3',
    'assets/beyonce/los_m_brth.mp3',
    'assets/beyonce/nnn.mp3',
    'assets/Janet/Alright.mp3',
    'assets/Janet/Black Cat.mp3',
    'assets/Janet/Control.mp3',
    'assets/Janet/Escapade.mp3',
    'assets/Janet/Love Will Never Do.mp3',
    'assets/Janet/Miss You Much.mp3',
    'assets/Janet/Rhythm Nation.mp3',
    'assets/Janet/Runaway.mp3',
    'assets/Janet/Thats The Way Love Goes.mp3',
    'assets/Janet/The Pleasure Principal.mp3',
    'assets/Janet/What Have You Done For Me Lately.mp3',
    'assets/Janet/When I Think Of You.mp3',
    'assets/beyonce/luvntp.mp3'
];

function playSong(){
    var randomSong = (Math.floor(Math.random() * songs.length));
    sample = new Audio (songs[randomSong]);
    sample.play();
    document.getElementById('audioP').disabled = true;

    var barProg = document.getElementById("bar");
    barProg.style.backgroundColor = 'crimson'; 
    var width = 1;
    var id = setInterval(frame, sample.currentTime);
    function frame() {
        if (width >= 100) {
            barProg.style.backgroundColor = 'limegreen';
            document.getElementById('procent').style.color = 'limegreen';
            clearInterval(id);
        } else {
            width = (sample.currentTime / sample.duration) * 100; 
            barProg.style.width = width + '%'; 
            document.getElementById('procent').innerHTML = ((sample.currentTime / sample.duration) * 100 | 0) + '%';
        }
    }
}

function stopSong(){
    document.getElementById('audioP').disabled = false;
    sample.pause();
}
