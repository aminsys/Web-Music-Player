function textChange(){
    
    $(document).ready(function(){ 
        $('span').fadeOut(2000, function() {
        $(this).text("Welcome 🙏")
        }).fadeIn(2000);
        
        $('span').fadeOut(2000, function() {
        $(this).text("Please Enter! 👈")
        }).fadeIn(2000);
    })

};

var looper = setInterval(function() {

textChange();
console.log("Changing!");

}, 1000);
