function page(){
    
    window.location.href = "page.html";
    clearInterval(looper);
    console.log("Looper stopped!");
}

$( document).ready(function() {
    $('#h').click(function() {
        $('#h').append('<embed id="embed_player" src="assets/sample.mp3" autostart="false" hidden="true"></embed>');
    });
});