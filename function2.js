function SayName(){
    console.log("S")
} 
SayName();

function greet(name, age) {
    console.log("Hello, " + name + "! You are " + age + " years old.");
}
greet("Sahil",21);

function LogUserMessage(username){
    if(username === undefined){
        console.log("Please enter the user name");
        return

    }

    return `${username} logged in`

}

console.log(LogUserMessage("Sahil"));
console.log(LogUserMessage());

function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,400,500));


const user = {
    Username: "Sahil",
    Price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject .Username} and Price is ${anyObject .Price}`);

}

handleObject(user);


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));