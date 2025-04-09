let menu = document.querySelector(".menu-hidden")
let input = document.querySelector("input")
let menu2 = document.querySelector(".menu")
let header = document.querySelector("header")
menu.addEventListener("click", entradadomouse)

function entradadomouse(){
    if(menu2.style.display == "flex" ){
        menu2.style.display = "none"
        menu.style.transform = "rotateY(0deg)"
    }else{
        menu2.style.display = "flex"
        menu.style.transform = "rotateY(180deg)"
    }
}
