const accountId = 144553
let accountEmail = "jeet@gmail.com"
var accountPassward ="098765"
accountCity = "Brahmapur"
let accountState; //undefined

//accountId = 2 // not allowed

accountEmail = "jp@gmail.com"
accountPassward = "123456"
accountCity = "bhubaneswar"

console.log(accountId);

console.table([accountId, accountEmail,accountPassward,accountCity,accountState]);

/*
prefer not to use var 
because of issue in block scope anf functional sc
*/