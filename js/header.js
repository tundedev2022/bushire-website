const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector(".open")
const navbar = document.querySelector('.navbar')

function toggleMenu() {
    navbar.classList.toggle("active")
} 

openBtn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)



