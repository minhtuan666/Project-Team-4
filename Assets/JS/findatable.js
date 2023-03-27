let sendbtn3 = document.getElementById('send3')
let form3 = document.getElementById('form3')

form3.addEventListener('submit', (e) => {
    e.preventDefault();
});

sendbtn3.addEventListener('click', (e) => {
    let person = document.getElementById('person');
    let date = document.getElementById('date');
    let time = document.getElementById('time');

    person = person.value;
    localStorage.setItem('person', person);

    date = date.value;
    localStorage.setItem('date', date);

    time = time.value;
    localStorage.setItem('time', time);

});