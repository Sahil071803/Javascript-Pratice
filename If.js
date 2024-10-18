console.log("Helloo World!");

//----------------------------------------------------------------------------------//

// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50")
// }

// console.log("Execute");


const temperature = 41

if(temperature > 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50")
}

console.log("Execute");





const balance = 1000

if(balance < 500){
    console.log("balance is less than 500")
}

else if(balance < 750){
    console.log("balance is less than 750")
}

else if(balance < 900){
    console.log("balance is less than 900")
}

else{
    console.log("balance is less than 1200")
}

const amount = 1500

if (amount > 500) console.log("test");


const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true


if(UserLoggedIn && debitCard){
    console.log("Allow to buy Course");
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged In");
}

else{
    console.log("Executed");
}