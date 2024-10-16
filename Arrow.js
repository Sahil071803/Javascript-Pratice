function one(){
    let username = "Sahil"
    console.log(this.usename)
}

one()


// const addTwo = (num1,num2) => {
//     return num1+num2

// }

// console.log(addTwo(3,4))

// const addTwo =(num1,num2) => (num1 + num2)

// console.log(addTwo(3,4))


const addTwo =(num1,num2) => ({username : "Sahil"})

console.log(addTwo(4,5));




