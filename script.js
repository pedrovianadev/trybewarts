const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  if (document.getElementById('email').value === 'tryber@teste.com' && document.getElementById('password').value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
