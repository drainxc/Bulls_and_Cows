const number = document.getElementById('number');
const start = document.getElementById('start');

let game = false;

let input;
let num = [];
let initialValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startEvent() {
    if (!game) {
        let n = 0;
        input = document.getElementById('input').value;
        for (let i = 0; i < input; i++) {
            let randomNumber = getRandomIntInclusive(0, 9 - n)
            num[i] = (initialValue[randomNumber]);
            initialValue.splice(randomNumber, 1);
            console.log(num[i]);
            n++;
        }
        game = true;
    }
}
    start.addEventListener('click', startEvent);