function myBtn() {
    const buttonElement = document.querySelector('.js-btn');

if(buttonElement.innerHTML === 'YOU ARE WELCOME'){
    buttonElement.innerHTML = 'BOOK NOW'
}else{
buttonElement.innerHTML = 'YOU ARE WELCOME'
buttonElement.classList.add("pro-btn")
buttonElement.classList.remove("pro-btn")
}
    
}
