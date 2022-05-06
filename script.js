// Variaveis
var resultado;
var imc;

// Função Calcular IMC
function calcular(event) {

    // Dados nao somem depois da função
    event.preventDefault();

    // Variavel peso vai receber o valor que esta no elemente ID 'peso'
    var peso = document.getElementById('peso').value;

    // Variavel altura vai receber o valor que esta no elemente ID 'altura'
    var altura = document.getElementById('altura').value;

    // Calculo IMC
    imc = peso / (altura * altura);

    // Variavel resultado é um document.getElementById('resultado')
    resultado = document.getElementById('resultado');

    // Verificando o resultado menor que 17
    if (imc < 17) {

        // Incluindo HTML
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<br/> Cuidado você esta muito abaixo do peso!';
    
    }
    // Verificando o resultado maior que 17 e menor ou igual a 18.49
    else if (imc > 17 && imc <= 18.49) {

        // Incluindo HTML
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<br/> Você abaixo do peso';
    
    }
    // Verificando o resultado maior ou igual a 18.5 e menor que 24.99
    else if (imc >= 18.5 && imc < 24.99) {

        // Incluindo HTML
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<br/> Você está no peso ideal';
    
    }
    // Verificando o resultado maior que 25 e menor ou igual a 29.99
    else if (imc > 25 && imc <= 29.99) {

        // Incluindo HTML
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<br/> Você está acima do peso';
   
    }
    // Verificando o resultado maior ou igual a 30
    else if (imc >= 30) {

        // Incluindo HTML
        resultado.innerHTML = '<br/> Seu resultado foi : ' + imc.toFixed(2) + '<br/> Você está na obesidade';

    }

}