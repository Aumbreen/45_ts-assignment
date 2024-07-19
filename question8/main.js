// print to Name  in 
//uppercase
//lowercase
//tilte
var personName = "Aumbreen";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
