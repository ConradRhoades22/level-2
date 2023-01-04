//1.
// function total(arr) {
// const result = arr.reduce(function(final, num){
//     final = final + num
//     return final
// }, 0)
// console.log(result)
// }
// console.log(total([1,2,3])); // 6

//2.
// function stringConcat(arr) {
// const result = arr.reduce((final, nums) => {
//     return final + '' + nums;
// });
// console.log(result)
// };
// console.log(stringConcat([1,2,3])); // "123"

//3.
// function totalVotes(arr) {
//     const result = voters.reduce(function(final, voter){
//         if (voter.voted) {
//             final++
//         }
//         return final
//     }, 0)
//     console.log(result)
// }
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

//4.
// function shoppingSpree(arr) {
// const result = arr.reduce(function(final, price){
//     final = final + price.price
//     return final
// }, 0)
// console.log(result)
// }
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// console.log(shoppingSpree(wishlist)); // 227005

//5.
// function flatten(arr) {
//     const result = arr.reduce(function(final, prop){
//         final = final.concat(prop)
//         return final 
//     })
//     console.log(result)
// }
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]
// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
return arr.reduce((acc, obj) => {
    const key = obj.age;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj]};
})}
const groupedPeople = voterResults(voters);
//console.log(groupedPeople)
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4
}
*/
