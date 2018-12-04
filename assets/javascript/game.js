$( document ).ready(function() {

console.log('ready!');

var count = 30;

var counter = setInterval(timer, 1000); // runs every 1 second(1000)

function timer() {
    count = count - 1;

    if (count <= 0) {
      clearInterval(counter);  
    } 
    $('timer').text(count);
}
    
});