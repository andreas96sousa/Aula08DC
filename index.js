let menu = document.querySelector(".menu-hidden")
let input = document.querySelector("input")
let menu2 = document.querySelector(".menu")
let header = document.querySelector("header")
let cards = document.querySelector(".cards")
menu.addEventListener("click", entradadomouse)
cards.addEventListener("click", abrircard)

function abrircard(){
    let criardiv = document.createElement("div", "paipai")
}


function entradadomouse(){
    if(menu2.style.display == "flex" ){
        menu2.style.display = "none"
        menu.style.transform = "rotateY(0deg)"
    }else{
        menu2.style.display = "flex"
        menu.style.transform = "rotateY(180deg)"
    }
}
