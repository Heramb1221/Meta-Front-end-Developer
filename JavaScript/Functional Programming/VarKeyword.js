/*
1. We can access a var variable before initialization...
... as long as var variable is eventually initializes
... Anywhere in our code
2. We can declare and redeclare the same var variable without errors
*/

console.log(user);



user = 'mary';
user = 'Joanna';
console.log(user);





var user;