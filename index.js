const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let teste = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random()*this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt,value){
    attempt.innerHTML = 'Tentativa: '+ value
};


function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick){
        alert('Digite algum valor:')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick){
        playAgain();
        teste.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978'
        result.style.color = '#fff';
        teste.style.color = '#fff';
        clear();

    }else if(numberDrawn > kick){
        teste.innerHTML = 'O número e maior!';
        teste.style.color = '#de4251';
        clear();

    }else{
        teste.innerHTML = 'O número e menor!';
        teste.style.color = '#de4251';
        clear();
    }

};

function playAgain(){
document.getElementById('btnRestart').style.display = 'flex';

};

function restart(){
document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
};