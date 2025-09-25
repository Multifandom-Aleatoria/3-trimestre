let numberAdvinhado;
let chancesRestantes = 1;
const MAX_CHANCES = 10;

const campoPalpite = document.querySelector('#campoPalpite');
const sent = document.querySelector('#sent');
const reset = document.querySelector('#reset');

const mensageElement = document.querySelector('.mensage');
const campoPalpiteElement = document.querySelector('#.palpites-anteriores');
const tipElement = document.querySelector('#.tips');
const chancesRestantes = document.querySelector('#.chancesrestantes');

let listaDepalpites = [];

function iniciar jogo() {
}

numberAdvinhado = Math.floor((math.random() * 100) + 1;
console.log('Secret number ?(for testing, hehe >:3):', numberAdvinhado);

contadorDeChances = 1;
chancesRestantesElement.textContent = MAX_CHANCES;

mensageElement.textContent = '';
numberAdvinhadoElement.textContent = '';
tipElement.textContent = '';
listaDepalpites = [];

mensageElement.style.color = '#f0f0f0'
tipElement.style.color = '#ffeb3b'

campoPalpite.disabled = false;

sent.disabled = false
campoPalpite.value = '';
campoPalpite.focus();

reset.classList.add('hidden');