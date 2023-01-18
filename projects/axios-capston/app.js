//get

axios.get("https://api.vschool.io/conradrhoades/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const div = document.createElement('div')
            const checkbox = document.createElement('input')
            checkbox.setAttribute("type", "checkbox")
            const h2 = document.createElement('h2')
            if (response.data[i].completed === true) {
                h2.classList.add("completed")
                checkbox.setAttribute("checked", "checked")
            }
            h2.textContent = response.data[i].title
            div.appendChild(checkbox)
            div.appendChild(h2)
            document.body.appendChild(div)
        }
    })
    .catch(error => console.log(error))

// Create TO-DO
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
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response.data))
})