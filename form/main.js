const signUpButton = document.getElementById('create');
const signInButton = document.getElementById('entrar');
const container = document.getElementById('container');

signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active'));
signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active'));