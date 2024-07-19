// set the value for the variable  of age and  then:





let age : number=25;
// if the person is less than 2 years old, print a message that 
//the person  is a baby.


if(age<2){
console.log("persona is a baby.")
}

// if the person at least 2 years old but less than 4 years , print a message that the 
//person  is a toddler.

else if(age>=2 && age<4){


    console.log("person is toddler. ");
}
// if the person at least 4 years old but less than 13 years , print a message that the 
//person  is a kid.
else if(age>= 4 &&  age <13){
console.log("person is a kid.");
}
// if the person at least 13 years old but less than 20 years , print a message that the 
//person  is a teenager.
else if(age>=13 && age<20){
    console.log("person is a teenager.");
}
// if the person at least 20 years old but less than 65 years , print a message that the 
//person  is a adult

else if(age>=20 && age <65){
    console.log("person is an adult.");
}
// if the person is age  65 years older ,print a massege 
//that the person is an elder

else{
    console.log("person is an elder.");
}
