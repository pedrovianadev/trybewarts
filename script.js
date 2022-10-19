const disable = document.querySelector('#submit-btn');
const loginButton = document.getElementById('loginButton');

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
