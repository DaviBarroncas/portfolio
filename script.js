const botao = document.getElementById('toggle-tema');

botao.addEventListener('click', function() {
    document.body.classList.toggle('light');
});