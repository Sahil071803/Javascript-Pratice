//  let myDate = new Date()
//  console.log(typeof myDate);

//  console.log(myDate.toString());

//  console.log(myDate.toDateString());

//   console.log(myDate.toLocaleString());

//  let CreatemyDate = new Date(2024,5,4);
//  console.log(typeof CreatemyDate.toDateString());
 
//  console.log(CreatemyDate.toTimeString());

//   let myDate = new Date(2024,0,4,6,30,45,100)
//  console.log(myDate.getDate());
//  console.log(myDate.getMonth());
//  console.log(myDate.getFullYear());
// console.log(typeof myDate.getTime()/1000);
// console.log(myDate.toLocaleString());
// console.log(typeof myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());

let date = new Date()
// console.log(date.getMonth()+1);
// console.log(`${date.getMonth()+2} is a month of november `);

// console.log(date.setMinutes());

console.log(  date.toLocaleString('default',{
  weekday: "long",
  day: "numeric",
  hour: "numeric",
  
}));

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleString());



