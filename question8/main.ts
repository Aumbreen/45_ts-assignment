// print to Name  in 
//uppercase
//lowercase






let personName:string= "Aumbreen";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char)=>char.toUpperCase()));
