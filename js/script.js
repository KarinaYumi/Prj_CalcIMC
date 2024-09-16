function validacaoNome(e) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;

        } else if (e) {
            var charCode = e.which;

        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) || 
            (charCode === 13) || (charCode === 32)
        ){
          return true;
        } else {
            alert("Preencha este campo com letras!")
            
          return false;
        }
    } catch (err) {
        alert(err.Description);
    }
  }

function salvarDados(event) {
    event.preventDefault();

        var nome = document.getElementById('nome').value;
        var idade = document.getElementById('idade').value;
        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;

        var imc = peso / (altura * altura);
        var classificacaoIMC;

            if (imc < 18.5) {
                classificacaoIMC = "Abaixo do peso";

            } else if (imc > 18.5 && imc < 25) {
                classificacaoIMC = "Peso Normal";

            } else if (imc > 24.9 && imc < 30) {
                classificacaoIMC = "Sobrepeso";

            } else if (imc > 29.9 && imc < 35) {
                classificacaoIMC = "Obesidade Grau I";

            } else if (imc > 34.9 && imc < 40) {
                classificacaoIMC = "Obesidade Grau II";

            } else {
                classificacaoIMC = "Obesidade Grau III";
            }

        localStorage.setItem('nome', nome);
        localStorage.setItem('idade', idade);
        localStorage.setItem('peso', peso);
        localStorage.setItem('altura', altura);
        localStorage.setItem('imc', imc.toFixed(2));
        localStorage.setItem('classificacaoIMC', classificacaoIMC);
    
        window.location.href = 'relatorio.html';
}
