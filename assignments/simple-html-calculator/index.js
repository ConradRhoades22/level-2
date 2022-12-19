let resultsDiv = document.getElementById("resultsDiv")

let addForm = document.getElementById("addition")
const firstAdd = document.getElementById("firstAdd")
const secondAdd = document.getElementById("secondAdd")

let subtractionForm = document.getElementById("subtraction")
const firstSub = document.getElementById("firstSub")
const secondSub = document.getElementById("secondSub")

let multiplyForm = document.getElementById("multiply")
const firstMult = document.getElementById("firstMult")
const secondMult = document.getElementById("secondMult")

const addToPage = (res,type) => {
    let newEl = document.createElement('p')
    newEl.textContent=type + " " + res 
    resultsDiv.append(newEl)
}
const addSum = e => {
    e.preventDefault()
    let result = Number(firstAdd.value) + Number(secondAdd.value)
    addToPage(result, "Add")
}
addForm.addEventListener("submit", addSum)

const subSum = e => {
    e.preventDefault()
    let result = Number(firstSub.value) - Number(secondSub.value)
    addToPage(result, "Subtract")
}
subtractionForm.addEventListener("submit", subSum)

const multSum = e => {
    e.preventDefault()
    let result = Number(firstMult.value) * Number(secondMult.value)
    addToPage(result, "Multiply")
}
multiplyForm.addEventListener("submit", multSum)