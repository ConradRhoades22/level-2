function getTodo(){
    axios.get("https://api.vschool.io/conradrhoades/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}
function listData (data){
    clearList()
    for(let i = 0; i < data.length; i++){
        //List elements
        const div = document.createElement('div')
        const divContent = document.createElement('div')
        const checkbox = document.createElement('input')
        const h1 = document.createElement('h1')
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const deleteBtn = document.createElement("button")
        const img = document.createElement('img')
        //list elements contents
        // checkbox contents
        checkbox.setAttribute("type", "checkbox")
        checkbox.addEventListener("click", function() {
            checkboxFunc(data[i])
        })
        if (data[i].completed === true) {
            divContent.classList.add("completed")
            checkbox.setAttribute("checked", "checked")
        }
        //to do list data contents
        divContent.classList.add("divContent")
        h1.textContent = data[i].title
        h2.textContent = data[i].description
        h3.textContent = data[i].price
        // delete function contents
        deleteBtn.innerHTML = "Delete"
        deleteBtn.addEventListener("click", function(){
            deleteFunc(data[i]._id)
        })
        img.setAttribute("src", data[i].imgUrl)
        //page position of the list elements
        div.appendChild(checkbox)
        divContent.appendChild(h1)
        divContent.appendChild(h2)
        divContent.appendChild(h3)
        div.appendChild(divContent)
        div.appendChild(deleteBtn)
        div.appendChild(img)
        document.getElementById('todoData').appendChild(div)
    }
}
function clearList(){
    const dat = document.getElementById('todoData')
    while(dat.firstChild){
        dat.removeChild(dat.firstChild)
    }
}
getTodo()
//submit newto-do function
const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    const newTodo = {
        title: todoForm.titleinput.value,
        price: todoForm.price.value,
        description: todoForm.descriptioninput.value,
        imgUrl: todoForm.imgurl.value
    }
    axios.post("https://api.vschool.io/conradrhoades/todo", newTodo)
        .then(response => {
            console.log(response.data)
            getTodo()
        })
        .catch(error => console.log(error.response.data))
})
//Delete function
const deleteFunc = (data) => {
    axios.delete("https://api.vschool.io/conradrhoades/todo/" + data)
    .then(res => {
        clearList()
        getTodo()
    })
}
//checkbox Function
const checkboxFunc = data => {
    console.log(data)
    let updatedData = data
    updatedData.completed = !updatedData.completed
    console.log("label", updatedData)
    axios.put("https://api.vschool.io/conradrhoades/todo/" +data._id, updatedData)
    .then(res => {
        clearList()
        getTodo()
    })
}
















// //get
// axios.get("https://api.vschool.io/conradrhoades/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const div = document.createElement('div')
//             const checkbox = document.createElement('input')
//             checkbox.setAttribute("type", "checkbox")
//             checkbox.addEventListener("checked", function(){
//                 axios.put("https://api.vschool.io/conradrhoades/todo/" + response.data[i]._id, response.data[i].completed === true)
//             })
//             const h1 = document.createElement('h1')
//             const deletebtn = document.createElement('button')
//             deletebtn.innerHTML = "Delete"
//             deletebtn.addEventListener("click", function(){
//                 
//             })
//             if (response.data[i].completed === true) {
//                 h1.classList.add("completed")
//                 checkbox.setAttribute("checked", "checked")
//             }
//             h1.textContent = response.data[i].title
//             div.appendChild(checkbox)
//             div.appendChild(h1)
//             div.appendChild(deletebtn)
//             document.body.appendChild(div)
//         }
//     })
//     .catch(error => console.log(error))

// // Create TO-DO
// 

// // Checkbox needs to updat the database to be marked as complete.
