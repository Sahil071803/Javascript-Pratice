
// 1) for-of
// const arr = [1,2,3,4,5]

// for( const num of arr){
//     // console.log(num);
// }


// const num = ("Hello,World!")

// for( const string of num){
//     console.log(string);
// }


// const boolean = 1

// for( const num of boolean){
//     console.log(num);
// }

// const num = 1

// for( const boolean of num){
//     console.log(boolean);
// }

//-----------------------------------------------------------------------------------------------------------------//
// 2) Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States Of America")
// map.set('FR',"France")
// map.set('AUS',"India")

// console.log(Map)



// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States Of America");
// map.set('FR', "France");
// map.set('AUS', "Australia"); 
// // console.log(map);

// for ( const [key,value] of map ){
//     // console.log(key);

//     console.log(`${key} is a short form of ${value}`);
    
// }

// const myObject = {
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"

// }

// // console.log(myObject);

// for(const [key,value] in myObject){
//     console.log(`${key} is shortcut is for ${myObject[]} `);
// }

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// };

// for (const [key, value] of myObject) {
//     console.log(${key} is shortcut is for ${value});
// }


// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// };

// 
// for (const [key, value] of Object.entries(myObject)) {
//     console.log(`${key} is shortcut is for ${value}`);
// }

// ------------------------------------------------------------------------------------------------------------------
//for Each loop


const Coding = ["js","ruby","Python","cpp"]

Coding.forEach(function(val){
    console.log(val)
})


const myCoding = [
    {
        LanguageName:"javascript",
        LanguageFileName:"js"
    },
    {
        LanguageName:"java",
        LanguageFileName:"java"
    },
    {
        LanguageName:"Python",
        LanguageFileName:"py"
    },

]

myCoding.forEach((item) => {
    console.log(item);
})