let alugados = 1;
function jogos_alugados(){
    console.log(`total de alugados ${alugados}`);
}
function alterarStatus(id){
    
    let jogo_clicado = document.getElementById(`game-${id}`);
    let imagem = jogo_clicado.querySelector('.dashboard__item__img');
    let botao = jogo_clicado.querySelector('.dashboard__item__button');
    let nome_jogo = jogo_clicado.querySelector('.dashboard__item__name')
    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`voce quer mesmo devolver ${nome_jogo.textContent} ?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alugados--;
        } 
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'devolver';
        alugados++;
    }
    jogos_alugados();
}
document.addEventListener('DOMContentLoaded', function() {
    alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    jogos_alugados();
});

//ordenar numeros em ordem crescente
function ordenar_nums(a,b,c){
    let nums = [a,b,c].sort((num1, num2) => num1 - num2);
    console.log(nums)
}
ordenar_nums(1,75,77)

//verificar se palavra e um palindromo
function verificar_palindromo(string){
    let palavra = 'renner';
    let separador = palavra.split('');
    let invertida = separador.reverse();
    invertida = invertida.join('');
    if(palavra == invertida){
        console.log('palindromo');
    }else{
        console.log('nao palindromo');
    }
}
verificar_palindromo();