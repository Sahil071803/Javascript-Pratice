// let i = 0
// while (i <= 10) {
//     console.log(`Value of index is ${i}`);
//     i = i+2
   
    
// }

let index = 1
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index+1
    
}

// let i = 1
// let a = 2
// while (i * a) {
//     console.log(`value of index is ${i*a}`)
//     i = i+1
//     ^c
// }

function add(a,b){
    let result = a;
    let count = 0;

    while (count <b){
        result += 1;
        count++;
    }
    return result
}

const num1 = 5
const num2 = 6
console.log(`${num1} + ${num2} = ${5+6}` );


let myArray = ["Batman" ,"Ironman","Superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr+1
}
console.log(typeof myArray);