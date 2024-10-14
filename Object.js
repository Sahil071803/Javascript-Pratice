

const Jsuser = {
    name : "Sahil",
    age : 21,
    email : "sahil547@gmail.com",
    password : 547841,
    login :  [ "Monday","Thrusday"]
    }

console.log(Jsuser);

console.log(Jsuser.email);
console.log(Jsuser.password);
console.log(Jsuser.login);
console.log(typeof Jsuser["name"]);

console.log(typeof Jsuser["login"]);
console.log(typeof(null));

const Plyuser = {
    Team : "India",
    Capname : "Rohit",
    Age : 38,
    Runs : 12458,
    Odi : 340,
    T20 : 160,
    Test : 105
    


}

console.log(Plyuser);
console.log(Plyuser.Team);
console.log(Plyuser.Capname);
console.log(Plyuser.Odi);
console.log(Plyuser.Runs);
console.log(Plyuser.T20);
console.log(Plyuser.Test);
console.log(Plyuser.Age);

Plyuser.Capname = "Virat"
console.log(Plyuser.Capname);

const Bankuser = {
    Accname :["Sahil Atram"],
    Accno : 4775648921647,
    Branchname : "ICCI",
    Phoneno : 9356866994,
    Branch : "Nagpur",
    Email : "Sahilatram58741@gmail.com",
    join :  "24-3-2004"
}

console.log(Bankuser);
console.log(Bankuser.Accno);
console.log(Bankuser["Accname"]);
console.log(Bankuser.Branchname);
console.log(Bankuser.Phoneno);
console.log(Bankuser.Email);
console.log(Bankuser.join);
console.log(Bankuser.Branch);

Bankuser.Branch = "BOI"
Bankuser.Email = "Sajesh@gmail.com"
console.log(Bankuser.Branch);
console.log(Bankuser.Email);
console.log(Bankuser);



