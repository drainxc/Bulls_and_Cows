const number = document.getElementById('number');
const start = document.getElementById('start');

let input;
let num = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startEvent() {
    input = document.getElementById('input').value;
    for (let i = 0; i < input; i++) {
        num[i] = (getRandomIntInclusive(0, 9));
        console.log(num[i]);
    }
}

start.addEventListener('click', startEvent);