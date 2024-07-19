









let magician:string[]=['herry potter','zak','ron weasley','Albus Dumbleedore','nadeei'];
function make_great(magicianarry:string[]){
    for(let i=0; i<magicianarry.length; i++){
magician[i]='the great'   + magicianarry[i]
}
}

function show_magicians(magicians:string[]){
magicians.forEach(element => {
    

    console.log(element);

});
}
 make_great(magician);
 show_magicians(magician);

