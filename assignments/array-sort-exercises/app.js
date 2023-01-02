//1.
// function leastToGreatest(arr) {
//     const result = arr.sort((a, b) => a - b)
//     return result
// }
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//2.
// function GreatestToLeast(arr) {
//     const result = arr.sort((a, b) => b - a)
//     return result
// }
// console.log(GreatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

//3.
// function lengthSort(arr) {
//     const result = arr.sort((a, b) => (a.length < b.length ? -1 : a.length > b.length ? 1 : 0))
//     return result
// }
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

//4.
// function alphabetical(arr) {
//     const result = arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
//     return result
// }
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//5.
// function byAge(arr){
//     const result = arr.sort((a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0))
//     return result
// }
// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]