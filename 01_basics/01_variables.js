const accountId = 144533
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountCity = "jabalpur"
// let accountState;

// accountId = 2 //not allowed because it is a const and cannot be changed

// prefer not to use var 
// beacuse of issue in block scope and functional scope


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity])