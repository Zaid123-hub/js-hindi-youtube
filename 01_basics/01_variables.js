const accountId = 144533
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jabalpur"
let accountState;
accountCity = "Jaipur"



// accountId = 2 //not allowed because it is a const and cannot be changed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId)

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
