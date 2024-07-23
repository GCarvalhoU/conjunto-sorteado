function sortear() {
    let qntd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de>= ate){
        alert("Campo 'Do número' deve ser inferior ao campo 'Até o número'. Verifique."
        ); return;
    }

    if (qntd > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }



    let sorteados = [];
    let num;



    for (let i = 0; i < qntd; i++){
        num = gerarNum(de, ate);

        while (sorteados.includes(num)){
           num = gerarNum(de, ate);
        }
        sorteados.push(num);
        
    }
    let exibidos = document.getElementById('resultado');
    exibidos.innerHTML =  `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatus();
}


function gerarNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function alterarStatus(){
    let habilitar = document.getElementById('btn-reiniciar');
    if(habilitar.classList.contains('container__botao-desabilitado')){
        habilitar.classList.remove('container__botao-desabilitado');
        habilitar.classList.add('container__botao');
    } else {
        habilitar.classList.remove('container__botao');
        habilitar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatus()
}
