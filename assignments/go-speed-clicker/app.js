const clickCount = document.getElementById("clickCount")
const clickButton = document.getElementById("clickMe")
const count = document.getElementById("count")
let cCount = Number(localStorage.getItem("countNum"))|| 0 
count.textContent = cCount
clickButton.addEventListener("click",(e) =>{
    e.preventDefault
    cCount=cCount+1;
    count.textContent = cCount
    console.log(cCount)
    localStorage.setItem("countNum", cCount)
})
