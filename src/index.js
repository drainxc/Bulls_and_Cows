const start = document.getElementById('start');
const cheak = document.getElementById('cheak');
const sequence = document.getElementById('sequence');
const round = document.getElementById('round');

let game = false;

let number;
let input;
let roundNumber = 0;
let strike = 0;
let boll = 0;
let gameNumber = [];
let num = [];
let initialValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

round.innerHTML = `횟수 : ${roundNumber}`;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compare() {
    for (i = 0; i < input; i++) {
        if (num[i] == gameNumber[i]) {
            strike++;
        }
        else {

        }
    }
    console.log(strike);
}

function startEvent() {
    if (!game) {
        input = document.getElementById('input').value;
        if (1 <= input && input <= 9) {
            let n = 0;
            sequence.innerHTML = '';
            for (let i = 0; i < input; i++) {
                let randomNumber = getRandomIntInclusive(0, 8 - n)
                num[i] = (initialValue[randomNumber]);
                initialValue.splice(randomNumber, 1);
                console.log(num[i]);
                n++;
            }
            game = true;
        }
        else {
            alert('1~9까지 입력해주세요.');
            sequence.innerHTML = '※';
        }   
    }
}

function cheakEvent() {
    if (game) {
        number = document.getElementById('number').value;
        if (10 ** (input - 1) <= number && 10 ** (input) > number) {
            let n = input - 1;
            roundNumber++;
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
            const newDiv = document.createElement('div');
            const newText = document.createTextNode(number);
            newDiv.appendChild(newText);
            document.body.appendChild(newDiv);
            compare();
            round.innerHTML = `횟수 : ${roundNumber} ${strike}S`;
        }
        else {
            alert('자릿수를 확인해주세요!');
        }
    }
    else {
        alert('순서대로 입력해주세요.');
        sequence.innerHTML = '※';
    }
}

start.addEventListener('click', startEvent);
cheak.addEventListener('click', cheakEvent);