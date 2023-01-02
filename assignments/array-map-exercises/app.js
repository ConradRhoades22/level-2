//1.
// const arr = [1, 2, 3, 4, 5]
// const result = arr.map (function(num){
//     return num * 2
// })
// console.log(result)

//2.
// const arr = [1, 2, 3, 4, 5]
// const result = arr.join(" ")
// console.log(result)

//3.
// const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
//     const newArr = capitalizeNames.map(function(props){
//         let lc = props.toLowerCase()
//         let split = lc.split("")
//         let uc = split[0].toUpperCase()
//         split[0] = uc
//         let names = split.join("")
//         return names
//     })
//     console.log(newArr)

// 4.
// function namesOnly(arr){
//     let actors = arr.map(function(props){
//         return props.name
//     })
//     return actors
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5.
// function makeStrings(arr){
//     let actors = arr.map(function(props){
//         if (props.age >= 18) {
//             return(props.name + " can go to The Matrix")
//         } else {
//             return(props.name + " is Underage")
//         }
//     })
//     return actors
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//6.
// let people = document.getElementById("people")
// function readyToPutInTheDOM(arr){
//     let newArr = arr.map(function(props){
//         let newDiv = document.createElement("div")
//         let newH1 = document.createElement("h1")
//         let newH2 = document.createElement("h2")
//         newH1.textContent = props.name
//         newH2.textContent = props.age
//         newDiv.append(newH1)
//         newDiv.append(newH2)
//         people.append(newDiv)

//         return "<h1>" + props.name + "</h1>" + "<h2>" + props.age + "</h2>"
//     })
//     return newArr
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]