const createButton = document.getElementById('create');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

createButton.addEventListener('click', ()=> container.classList.add('right-panel-active'));
logInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active'));