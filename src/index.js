const start = document.getElementById('start');
const cheak = document.getElementById('cheak');
const sequence = document.getElementById('sequence');

let game = false;

let number;
let input;
let gameNumber = [];
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
        sequence.innerHTML = '';
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

function cheakEvent() {
    if (game) {
        number = document.getElementById('number').value;
        let n = input - 1;
        if (10 ** (input - 1) <= number && 10 ** (input) > number) {
            for (let i = 0; i < input; i++) {
                if (i == 0) {
                    gameNumber[i] = parseInt(number / 10 ** n);
                }
                else {
                    gameNumber[i] = parseInt((number % 10 ** n) / (10 ** (n - 1)));
                    n--;
                }
                console.log(gameNumber[i]);
            }
        }
    }
    else {
        alert('순서대로 입력해주세요.');
        sequence.innerHTML = '※';
    }
}

start.addEventListener('click', startEvent);
cheak.addEventListener('click', cheakEvent);