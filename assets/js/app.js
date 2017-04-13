$(document).foundation()

// // Set the date we're counting down to
// var countDownDate = new Date("Apr 21, 2017 14:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("countDown").innerHTML = "<div class='days'><h4>"+ days + "</h4><p>Days</p></div><div class='hours'><h4>" + hours + "</h4><p>Hours</p></div><div class='minutes'><h4>"
//   + minutes + "</h4><p>Minutes</p></div><div class='seconds'><h4>" + seconds + "</h4><p>Seconds</p></div>";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countDown").innerHTML = "EXPIRED";
//   }
// }, 1000);