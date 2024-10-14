let myArr = [0, 1, 2, 3, 4]

console.log(myArr[5]);
console.log(myArr);

console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);


myArr.push(5);
console.log(myArr);

myArr.pop();
console.log(myArr);



console.log(myArr.pop());

console.log(myArr.unshift(6));

console.log(myArr.includes());
console.log(myArr.includes(1));

console.log(myArr.splice(5));
console.log(myArr.slice(5));

const marvel_heros = ["Captain America", "IronMan", "Thor"];
//  marvel_heros.push("hulk");
//  console.log(marvel_heros);

//  marvel_heros.unshift("Spider Man");
//  console.log(marvel_heros);

//  marvel_heros.shift()
//  console.log(marvel_heros);

const dc_heros = ["SuperMan", "AquaMan", "Batman"];

allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

console.log(Array.isArray("Sahil"));

console.log(Array.from("Sahil"));



let score1 = 200;
let score2 = 100;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


let itsArr = ["Sahil", 5, "Atram", 54475];
console.log(itsArr);

console.log(itsArr[0]);
console.log(itsArr[1]);
console.log(itsArr[2]);
