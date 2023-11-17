let cross_nav = document.getElementById('cross_nav')
let ham = document.getElementById('ham')
let pora_ul = document.getElementById('pora_ul')

ham.addEventListener('click' , ham_aya);

function ham_aya(){
    pora_ul.style.top = 0 ;
}

cross_nav.addEventListener('click' , nav_gya)

function nav_gya(){
    pora_ul.style.top = '-500px'
}