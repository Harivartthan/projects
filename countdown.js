
var giveawayEndDate = new Date("Nov 25, 2023 24:00:00").getTime();

var x = setInterval(function() {

  
  var now = new Date().getTime();

  var distance = giveawayEndDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("countdown").innerHTML = days + "DAYS " + hours + "HOURS "
  + minutes + "MINS " + seconds + "SECS ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Giveaway Expired";
  }
}, 1000);
