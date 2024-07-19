"use strict";
let magician = ['herry potter', 'zak', 'ron weasley', 'Albus Dumbleedore', 'nadeei'];
function make_great(magicianarry) {
    for (let i = 0; i < magicianarry.length; i++) {
        magician[i] = 'the great' + magicianarry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
