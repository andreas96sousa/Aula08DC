let menu = document.querySelector(".menu-hidden")
let input = document.querySelector("input")
let menu2 = document.querySelector(".menu")
let header = document.querySelector("header")
let cards = document.querySelectorAll(".cards")
menu.addEventListener("click", abrirmenu)
menu.addEventListener("click", trocarcordois)

function trocarcordois(selected){
    let divComprar = document.createElement("div")
    divComprar.classList.add("buy-page")
    document.body.appendChild(divComprar)

    let fechar = document.createElement("h1")
    fechar.classList.add("fechar-aba")
    fechar.textContent = "X"
    divComprar.appendChild(fechar)


    let fecharAba = document.querySelector(".fechar-aba")
    fecharAba.addEventListener("click", fecharaAba)

}

for(let i = 0; i <= cards.length; i++ ){
    cards[i].addEventListener("click", trocarcordois)
}


function abrirmenu(){
    
    if(menu2.style.display == "flex" ){
        menu2.style.display = "none"
        menu.style.transform = "rotateY(0deg)"
    }else{
        menu2.style.display = "flex"
        menu.style.transform = "rotateY(180deg)"
    }
}

function fecharaAba(){
    divComprar.remove()
}
