const form = document.travelForm
const submit = document.travelForm.submit
form.addEventListener("submit", (event) => {
event.preventDefault()
})

function infoAlert() {
    let firstName = form.elements["First Name"].value
    let lastName = form.elements["Last Name"].value
    let age = form.elements["Age"].value
    let gender = form.elements["gender"].value
    let destination = form.elements["Location"].value
    let diet = form.elements["diet"].value


    alert("First Name: "+ firstName + "\nLast Name: " + lastName + "\nAge" + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: "+ diet)
}
submit.addEventListener("click", infoAlert);
