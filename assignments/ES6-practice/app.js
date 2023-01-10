//1.
// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }
// runForLoop(["cat", "dog"])

//2.
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot)=> {
//         return { type: "carrot", name: carrot }
//     })
// }
//3.
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }
//4.
// doMathSum((a, b) => {
//     return a + b
// })

// var produceProduct = ((a, b) => {
//     return a * b
// })
//5.
// const people =[
//     {
//         firstname: "Jane",
//         lastname: "Doe",
//         age: 100
//     }
// ]
// let firstname = people[0].firstname
// let lastname = people[0].lastname
// let age = people[0].age
// console.log("Hi " + firstname + " " + lastname + ", how does it feel to be " + age + "?")