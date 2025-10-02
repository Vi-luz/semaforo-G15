const botaoVermelho = document.getElementById('red');
const botaoVerde = document.getElementById('green');
const botaoAmarelo = document.getElementById('yellow');

botaoVermelho.addEventListener('click', function(texto) {
    const textoDoBotao = texto.target.textContent;
    console.log('Botão clicado! Conteúdo: ', textoDoBotao);
});

botaoVerde.addEventListener('click', function(texto) {
    const textoDoBotao = texto.target.textContent;
    console.log('Botão clicado! Conteúdo: ', textoDoBotao);
});

botaoAmarelo.addEventListener('click', function(texto)
{ const textoDoBotao = texto.target.textContent;
    console.log('Botão clicado! Conteúdo: ', textoDoBotao);
});