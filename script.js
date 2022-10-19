const disable = document.querySelector('#submit-btn');
const loginButton = document.getElementById('loginButton');
const character = document.querySelector('#textarea');

disable.setAttribute('disabled', true);

loginButton.addEventListener('click', () => {
  if (
    document.getElementById('email').value === 'tryber@teste.com'
    && document.getElementById('password').value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agree = document.querySelector('#agreement');

agree.addEventListener('click', () => {
  if (agree.checked) {
    disable.removeAttribute('disabled');
  }
});

character.addEventListener('input', () => {
  const qtdC = character.value.length;
  const counter = document.querySelector('#counter');
  const sub = 500 - qtdC;

  counter.textContent = sub;
});
