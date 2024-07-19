"use strict";
//Alien_colors#2
//choose a color for an Alien as you did in exercise 25
let Alien_colors = "green";
// write an if else chain.// if the Alien s' color is green ,print a sttement that
//the player just earned 5 points for shooting the alien.  
if (Alien_colors === "green") {
    console.log(' player earned 5 points for shooting the Alien!');
}
else {
    console.log('player just earned 10 points.');
}
// the Alien_colors isn't green,print a statement that the player just
// earned 10 points
Alien_colors = "yellow";
if (Alien_colors === 'green') {
    console.log(' player earned 5 points for shooting the Alien!');
}
else {
    console.log(' player just earned 10 points.');
}
