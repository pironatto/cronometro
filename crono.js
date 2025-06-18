
 var distance = parseInt(180);
var x = setInterval(function() {

 
  var minutes = Math.floor((distance / 60));
  var seconds = Math.floor((distance % 60));
 

  document.getElementById("demo").innerHTML = minutes.toString().padStart(2,"0") + " : " + seconds.toString().padStart(2,"0");
  distance -=1;  
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
