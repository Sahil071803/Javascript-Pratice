let a =300

if(true){
    let a= 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);

function one(){
    const username = "Sahil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()

}
one()

if(true){
    const username = "Sahil"
    if(username =="Sahil"){
        const website = "  youtube"
        console.log(username +   website);
    }
}