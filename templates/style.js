var modal = document.getElementById("myModal");
var btn = document.getElementById("myCtn");
var span = document.getElementById("close")

btn.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
}