"use strict";
//Alein colors#1:imagin an alein  was just shotdownin a game.create a  variable 
//called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('The player just earned 5 points !');
}
//write one version of this program that passes the if test and another that fails.
alien_color = "yellow";
//(The version that fails will have no output.)
if (alien_color === 'green') {
    console.log('The version that fails !');
}
