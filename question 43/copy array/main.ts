







let megician:string[]=['herry potter','zak','ron weasley','Albus Dumbleedore','nadeei'];
function copyarry(arr:string[]){
    return [...arr];
}




let magician:string[]=['herry potter','zak','ron weasley','Albus Dumbleedore','nadeei'];
function make_great(magicianarry:string[]){
    for(let i=0; i<magicianarry.length; i++){
magicianarry[i]='the great'   +  magicianarry[i]
}
}

function show_magicians(magicians:string[]){
magicians.forEach(element => {
    

    console.log(element);

});
}
const copymagicianarry=copyarry(magician)
make_great(copymagicianarry);

console.log('this is our orginal array:');
show_magicians(magician);

console.log('\nour  modify copy of array:');
show_magicians(copymagicianarry);


