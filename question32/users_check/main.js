"use strict";
//Ensure that everyone as a unique,users_name.
//.make a list of five or more users_name called current_usres
//.make another list of five users name called new_users.
//Make  sure one or two of new users_name are also  in the current_users list.
//.loop through the new _users list  to see if each_users_name has 
// already been used. if it has, print a message that the person will need  to enter
// a new  users-name. if a
//users-name has  not  been used , 
//print a message saying that the  users is available.
// make sure your compraison case insensitive.if 'John' has  been used ,'jHON'
//should not be  accepted.
let current_users = ['Taha', 'Daniyal', 'shaFaq', 'jawad', 'john'];
let new_users = ['Bilal', 'Taha', 'misbah', 'zain', 'john'];
new_users.forEach(newUsersname => {
    let lowercase = newUsersname.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`the username${newUsersname} is not available.plz write a different usernames`);
    }
    else {
        console.log(`the username ${newUsersname} is available`);
    }
});
