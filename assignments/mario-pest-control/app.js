const form = document.baddiesForm
const submit = document.baddiesForm.submit
const totalPrice = document.getElementById("totalPrice")
form.addEventListener("submit", e => {
    e.preventDefault()
    let gPrice = Number(form.goombas.value) * 5
    let bPrice = Number(form.elements["bob-ombs"].value) * 7
    let cPrice = Number(form.elements["cheep-cheeps"].value) * 11
    let result = gPrice + bPrice + cPrice
    totalPrice.textContent = result
})