//1.
// function sum(x, y){
//     try{
//         if (typeof x !== "number") {throw "X is not a number"}
//         if (typeof y !== "number") {throw "Y is not a number"}
//     }
//     catch(err){console.log(err)}
//     return x + y;
// }
// sum("a", 3)
//2.
var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if (username === "sam") {throw "INVALID CREDENTIALS"}
        if (password === "123abc") {throw "INVALID PASSWORD"}
    } catch (error) {console.log(error)}
    return username + password
}

