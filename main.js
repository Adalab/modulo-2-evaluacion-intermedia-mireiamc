'use strict';

//Variables

const btnPlay = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const playerOneResult = document.querySelector('.js-player1-result');
const playerTwoResult = document.querySelector('.js-player2-result');
let countPlayer1 = 0;
let countPlayer2 = 0;
let countMovements = 0;
const btnReset = document.querySelector('.js-btn-reset');

//Funciones
//Funcion para generar un numero random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function getRandomMove(){
    const randomNumber = getRandomNumber(10);
    console.log(randomNumber);
    if (randomNumber <= 3) {
        return 'piedra';
    } else if (randomNumber >= 7) {
        return 'papel';
    } else {
        return 'tijera';
    }
}

function winPlayer1(){
    countPlayer1 = countPlayer1 + 1;
    playerOneResult.innerHTML = countPlayer1;
    result.innerHTML = 'Has ganado :)';
}

function winPlayer2(){
    countPlayer2 = countPlayer2 + 1;
    playerTwoResult.innerHTML = countPlayer2;
    result.innerHTML = 'Has perdido :(';
}

function playRound() {
    const computerChoice = getRandomMove();
    const userChoice = select.value;
    //const choices = ['piedra', 'papel', 'tijera'];

    if (userChoice === computerChoice) {
        result.innerHTML = 'Empate';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ){
        winPlayer1();
    } else {
        winPlayer2();
    }
}

function incrementMovements(){
    countMovements = countMovements + 1;
    if(countMovements === 10){
        btnPlay.classList.add('hidden');
        btnReset.classList.remove('hidden');
    }
}

function handleClick(ev){
    ev.preventDefault(); // confirmar si es necesario
    incrementMovements();
    playRound();
}

function handleReset(ev){
    ev.preventDefault();
    countMovements = 0;
    countPlayer1 = 0;
    countPlayer2 = 0;
    btnPlay.classList.remove('hidden');
    btnReset.classList.add('hidden');
    playerOneResult.innerHTML = countPlayer1;
    playerTwoResult.innerHTML = countPlayer2;
    result.innerHTML = 'Vamos a jugar';
}
//Eventos

btnPlay.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleReset)