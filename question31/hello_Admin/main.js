"use strict";
// you are wrting code that will print a greeting to each 
//users after they log into a website.
//loop throigh the array ,and  print a greeting to each users:
//. if the users_name 'admin', print a special greeting 
//such as Heloo Admin,would you like to see a status report
const users_Name = ['Admin', 'mustafa', 'jazil', 'sana', 'safina'];
for (let i = 0; i < users_Name.length; i++) {
    if (users_Name[i] === 'Admin') {
        console.log('Hello Admin,would you like  to see a status report ?');
    }
    else {
        console.log(`hello${users_Name[i]},think you for logging itagain.`);
    }
}
