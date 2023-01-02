//1.
// function fiveAndGreaterOnly(arr){
//     const results = arr.filter(num => num >= 5)
//     console.log(results)
// }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//2.
// function evensOnly(arr) {
//     const results = arr.filter(num => num % 2 === 0)
//     console.log(results)
// }
// console.log(evensOnly([3, 6, 8, 2])); 

//3.
// function fiveCharactersOrFewerOnly(arr) {
//     const results = arr.filter(props => props.length <= 5)
//     return results
// }
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//4.
// function peopleWhoBelongToTheIlluminati(arr){
//     let results = arr.filter(people => people.member === true)
//     return results
// }
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

//5.
// function ofAge(arr){
//     const results = arr.filter(people => people.age >= 18)
//     return results
// }
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]