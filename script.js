const btnVisa = document.querySelectorAll(".pay-with ul li")[0]
const btnPaypal = document.querySelectorAll(".pay-with ul li")[1]

const cardVisa = document.querySelector("#visa")
const cardPaypal = document.querySelector("#paypal")

btnVisa.addEventListener("click", (e) => {
     clearActive()
 
     active(cardVisa)
     active(btnVisa)
 })

 btnPaypal.addEventListener("click", (e) => {
     clearActive()
 
     active(cardPaypal)
     active(btnPaypal)
 })

const active = (el) => {
    el.classList.add("active")
}

const clearActive = () => {
    cardVisa.classList.remove("active")
    cardPaypal.classList.remove("active")
    btnVisa.classList.remove("active")
    btnPaypal.classList.remove("active")
}