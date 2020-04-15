var i = 0;
var txt = "Hi! My name is Yaru, but you can call me Ru. It's nice to meet you!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if( i < txt.length) {
    document.getElementById( "intro").innerHTML += txt.charAt( i);
    i++;
    setTimeout( typeWriter, speed);
  }
}
