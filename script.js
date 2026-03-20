const _cardapio_btn = document.querySelectorAll(".btn")

_cardapio_btn.forEach(_button => { _button.addEventListener("click", ButtonPrint) })

function ButtonPrint() {
    console.log("Nyarlatothep desconfia de que você achou os produtos muito antiquados....")
}



