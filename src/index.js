const input = document.getElementById('input').value;
const number = document.getElementById('number');
const start = document.getElementById('start');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

