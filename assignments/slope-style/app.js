// function collectAnimals(...animals) {
//     let newAnimals = (animals)
//     console.log(newAnimals)
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//2.
// function combineFruit(fruit, sweets, vegetables){
//     console.log({fruit, sweets, vegetables})
//     return {fruit, sweets, vegetables}
// }

// combineFruit(["apple", "pear"],
//             ["cake", "pie"],
//             ["carrot"])
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    // }

//3.
// function parseSentence({location, duration}){
//     console.log( location + duration)
//     return `We're going to have a good time in ${location} for ${duration}`
// }
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });

//4.
// function returnFirst(items){
//     const [firstItem] = items;
//     return firstItem
// }

//.5
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let firstFav = arr[0]
//     let secondFav = arr[1]
//     let thirdFav = arr[2]
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }
// console.log(returnFavorites(favoriteActivities))

//6.
// function combineAnimals(arr, arr2 ,arr3) {
    
//     console.log([...arr, ...arr2, ...arr3])
// }
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//7.
// function product(...numbers) {
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)}

//9.
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]