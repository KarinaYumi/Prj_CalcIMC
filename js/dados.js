window.onload = function() {
    const nome = localStorage.getItem('nome');
    document.getElementById('nome').innerText = "Nome: " + nome;

    const idade = localStorage.getItem('idade');
    document.getElementById('idade').innerText = " Idade: " + idade;

    const peso = localStorage.getItem('peso');
    document.getElementById('peso').innerText = " Peso: " + peso;

    const altura = localStorage.getItem('altura');
    document.getElementById('altura').innerText = " Altura: " + altura;

    const imc = localStorage.getItem('imc');
    document.getElementById('imc').innerText = "Valor do IMC: " + imc;

    const classificacaoIMC = localStorage.getItem('classificacaoIMC');
    document.getElementById('classificacaoIMC').innerText = "Classificação : " + classificacaoIMC;
};