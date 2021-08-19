const start = document.getElementById('start');
const cheak = document.getElementById('cheak');
const sequence = document.getElementById('sequence');
const round = document.getElementById('round');

let game = false;

let number;
let input;
let roundNumber = 0;
let strike = 0;
let ball = 0;
let gameNumber = [];
let num = [];
let initialValue = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 초기 숫자 배열

round.innerHTML = `횟수 : ${roundNumber}`; // 횟수

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수

function compare() {
    for (i = 0; i < input; i++) {
        if (num[i] == gameNumber[i]) {
            strike++;
        } // 숫자와 위치가 맞을 때
        else {
            for (let j = 0; j < input; j++) {
                if (i != j) {
                    if (num[j] == gameNumber[i]) {
                        ball++;
                        j = input;
                    }
                }
            } // 숫자는 맞지만 위치가 틀렸을 때
        }
    }
} // 비교 함수

function inputEvent() {
    input = document.getElementById('input').value;
    if (input > 9) {
        input = 9;
    }
    if (input < 0) {
        input = 1
    }
    document.getElementById('input').value = input;
} // input 최댓값과 최솟값 지정

function startEvent() {
    if (!game) {
        if (1 < input && input <= 9) {
            let n = 0;
            sequence.innerHTML = '';
            for (let i = 0; i < input; i++) {
                let randomNumber = getRandomIntInclusive(0, 8 - n)
                num[i] = (initialValue[randomNumber]); // 배열 넣기
                initialValue.splice(randomNumber, 1); // 배열 자르기
                console.log(num[i]);
                n++;
            } // 숫자 랜덤
            game = true; // 게임 시작
        }
        else {
            alert('1~9까지 입력해주세요.');
            document.getElementById('input').value = ''; // input 값 초기화
            sequence.innerHTML = '※'; // 오류 발생
        } // 1~9 사이를 입력하지 않았을 때
    }
}

function cheakEvent() {
    if (game) {
        number = document.getElementById('number').value; // 입력한 값
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
                } // 각 자릿수 배열에 넣기
                console.log(gameNumber[i]);
            }
            compare(); //비교 함수 호출
            const newDiv = document.createElement('div'); // div 동적 생성
            let newText;
            if (strike != 0 && ball != 0) {
                newText = document.createTextNode(`${number} ${strike}S ${ball}B`);    
            }
            else {
                newText = document.createTextNode(`${number} OUT`);
            } // 텍스트 넣기
            newDiv.appendChild(newText);
            document.body.appendChild(newDiv); // 텍스트 띄우기
            round.innerHTML = `횟수 : ${roundNumber}`;
        }
        else {
            alert('자릿수를 확인해주세요!');
        } // 자릿수가 맞지 않을 때
    }
    else {
        alert('순서대로 입력해주세요.');
        sequence.innerHTML = '※';
    } // 게임이 시작되지 않았을 때
}

start.addEventListener('click', startEvent);
cheak.addEventListener('click', cheakEvent);