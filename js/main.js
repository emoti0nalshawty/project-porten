const btn = document.querySelector(".header__burger")

btn.addEventListener('click', function(e){
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})