window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0)
})







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


let sendbtn = document.getElementById('send')
let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

sendbtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let number = document.getElementById('number');
    let person = document.getElementById('person');
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let message = document.getElementById('message');
    

    name = name.value;
    localStorage.setItem('name', name);

    number = number.value;
    localStorage.setItem('number', number);

    person = person.value;
    localStorage.setItem('person', person);

    date = date.value;
    localStorage.setItem('date', date);

    time = time.value;
    localStorage.setItem('time', time);

    message = message.value;
    localStorage.setItem('message', message);

    

});

let sendbtn2 = document.getElementById('send2')
let form2 = document.getElementById('form2')

form2.addEventListener('submit', (e) => {
    e.preventDefault();
});

sendbtn2.addEventListener('click', (e) => {
    let email = document.getElementById('email');

    email = email.value;
    localStorage.setItem('email', email);
});

