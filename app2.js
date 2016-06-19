function page(){
    
    window.location.href = "page.html";
    clearInterval(looper);
    console.log("Looper stopped!");
}

var sample = new Audio ('assets/sample.mp3');

function playSong(){
    sample.play();
}