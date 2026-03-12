function print(...args) {
    console.log(...args)
}
function Get_innerHTML(_id, value) {
    document.getElementById(_id).innerHTML = value
}
function Get_id_click(_id, action) {
    document.getElementById(_id).addEventListener("click", action)
}

const _button = document.querySelector(".btn");
const _cardapio_btn = document.querySelectorAll(".btn")



function ButtonPrint(el_event) {
    console.log("Nyarlatothep desconfia de que você achou os produtos muito antiquados....")
}

_button.addEventListener("click", ButtonPrint)

_cardapio_btn.addEventListener("click", ButtonPrint)