let web_menu = document.querySelector('.hidden_web')
let menu_btn = document.querySelector('.hidden_menu')
let web_background = document.querySelector('.menu_backdrop')

menu_btn.addEventListener('click', function () {
    web_menu.classList.toggle('is-active');
    web_background.classList.toggle('is-active');
});

web_background.addEventListener('click', function () {
    web_menu.classList.toggle('is-active');
    web_background.classList.toggle('is-active');
})

let close_menu = document.querySelector('.close_icon')

close_menu.addEventListener('click', function () {
    web_menu.classList.toggle('is-active');
    web_background.classList.toggle('is-active');
})