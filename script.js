function print(...args) {
    console.log(...args)
}
function Get_innerHTML(_id, value) {
    document.getElementById(_id).innerHTML = value
}
function Get_id_click(_id, action) {
    document.getElementById(_id).addEventListener("click", action)
}

let _button = document.getElementById("btn").addEventListener("click")

_button = () => {
    print("foda")
}



print("coisa")
let chen_level = 0
Get_id_click("btn", () => {
    print("chen")
    chen_level += 1
    Get_innerHTML("label-chen", `Lv.${chen_level}`)
})


