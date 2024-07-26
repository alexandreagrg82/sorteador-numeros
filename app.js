// função que recupera os valores digitados pelo usuário
function sortear() {
    // parseInt para a conversão de string e inteiro
    // recuperar valores dos campos de determinado formulário com o .value
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

    // condição para proteção para a entrada de valores
    if (de > ate || quantidade > (ate - de) + 1 ) {
        alert('O primeiro número deve ser menor que o segundo, e a quantidade deve ser menor ou igual que o intervalo da diferença entre os dois + 1')
        reiniciar();
        sortear();
    }  else {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumAleatorio(de, ate);
            // loop para evitar que haja a inclusão de números repetidos na lista
            while(sorteados.includes(numero)) {
                numero = obterNumAleatorio(de, ate);
            }
            sorteados.push(numero);
            }
            // colocar na página (tela) o resultado baseado nos números sorteados
            let resultado = document.getElementById('resultado');
            // Template string `${}`
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
            
            alteraEstadoBotao();
    }
    
    
}

function obterNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// função para trocar a classe do botão e habilitar o botão de novo jogo, bem como para desabilitar quando necessário
// classList acessa a lista de classes que um elemento possui, no caso os botões
function alteraEstadoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    let botao2 = document.getElementById('btn-sortear');
    // classList.contains() verifica se determinado elemento possui uma determinada classe
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.disabled = true;
    }
    if(botao2.classList.contains('container__botao')) {
        botao2.classList.remove('container__botao');
        botao2.classList.add('container__botao-desabilitado');
        botao2.disabled = true;
    } else {
        botao2.classList.remove('container__botao-desabilitado');
        botao2.classList.add('container__botao');
        botao2.disabled = false;
    }

}

// função para o botão reiniciar limpar todos os campos
// não posso usar, por exemplo, quantidade.value = '' pois não é uma variável global e no reiniciar passarei uma string, além disso na função sortear, a variável recebe um inteiro.
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    // modificação do código html por meio de .innerHtml
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alteraEstadoBotao();
}