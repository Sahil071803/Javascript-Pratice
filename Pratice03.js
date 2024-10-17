// Functions 


function SayName(){
    console.log("S")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("L")
    
}

SayName();


function great (name ,age){
    console.log("Hello " + name + " !You are " + age + " Year old")
}

great("Sahil",21);

function Addtwonum(num1 , num2){
    let result = num1+num2
    console.log("Sahil");
    return result

}

const result = Addtwonum(5,6)
console.log(Addtwonum("result: " , result));


function Addnum(a,b){
    return a + b
    
}

console.log(Addnum(5,9));


function Multiplenum(a,b){
    return a*b
}

console.log(Multiplenum(7,7))

const user = {
    Username : "Sahil",
    Price : 199
}

function handleobject (anyobject){
    console.log(`Username is ${anyobject.Username}  and Price is ${anyobject.Price}`);
}

handleobject(user)

const Customer = {
    Name : "Sahil",
    Product : "Arialpowder",
    Age : 21,
    Price : 199
    
}

function Shoppingcart(Cart){
      console.log(` Customer Name ${Cart.Name} Age ${Cart.Age}  buyed a Product ${Cart.Product} from our shop at Price ${Cart.Price}.`)
}

Shoppingcart(Customer);

let a = 300;

if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);

function one (){
    const username = "Sahil"

    function two (){
        const website = "Youtube"
        console.log(username);
    }
    two()
}
one()

if(true){
    const username = "Sahil"
    if (username == "Sahil"){
        const website = "Youtube"
        console.log(username + website);
    }
}


// Execution process pratice code


let val1 = 10
let val2 = 5

function AddNum(num1 ,num2){
    let total = num1 + num2
    return total
}

// let result1 = AddNum(val1 , val2)
// let result2 = AddNum(10,3)

console.log(AddNum(10 , 3))

console.log(AddNum(val1 , val2))
