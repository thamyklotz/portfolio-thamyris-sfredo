// Atualiza ano
document.getElementById('ano').textContent = new Date().getFullYear();


// MENU RESPONSIVO
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', ()=> nav.classList.toggle('show'));


// TEMA CLARO/ESCURO
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if(saved) root.setAttribute('data-theme', saved);
themeToggle.addEventListener('click', ()=>{
const atual = root.getAttribute('data-theme');
const novo = atual === 'dark' ? 'light' : 'dark';
root.setAttribute('data-theme', novo);
localStorage.setItem('theme', novo);
});


// FORMULÁRIO + VALIDAÇÃO + MODAL
const form = document.getElementById('contact-form');
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modal-msg');
const modalClose = document.getElementById('modal-close');


function validaEmail(email){
return email.includes('@') && email.includes('.') && email.length > 5;
}


modalClose.addEventListener('click', ()=> modal.classList.add('hidden'));


form.addEventListener('submit', function(e){
e.preventDefault();
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
const mensagem = document.getElementById('mensagem').value.trim();


if(!nome || !email || !mensagem){
modalMsg.textContent = 'Por favor, preencha todos os campos.';
modal.classList.remove('hidden');
return;
}
if(!validaEmail(email)){
modalMsg.textContent = 'E-mail inválido. Tente novamente.';
modal.classList.remove('hidden');
return;
}


form.reset();
modalMsg.textContent = 'Mensagem enviada com sucesso!';
modal.classList.remove('hidden');
});
