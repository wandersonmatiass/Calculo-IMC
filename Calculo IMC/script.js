const calcular = document.getElementById('calcular')

function imc () {
    // adiciona todos os valores das tags
    const nome = document.getElementById('nome')
    const  altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')  
// calcula o imc
if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
     
    const valorIMC = (peso.value / (altura.value*altura.value)).toFixed(1)

    // adiciona a frase de acordo com o IMC
    let classificacao = ""

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso'
    } else if (valorIMC < 24.9) {
        classificacao = 'com peso ideal. Parabéns !'
    } else if ( valorIMC < 30) {
        classificacao = 'levemente acima do peso'
    }else if ( valorIMC < 35 ) {
        classificacao = 'com obesidade grau I.'
    } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II'
    } else {
        classificacao = 'com obesidade grau II. Cuidado'
    }
    // resultado na div resultado
    resultado.innerHTML = `${nome.value} seu IMC é ${valorIMC} e você está ${classificacao}`

// aviso de erro caso nao preencha
} else {
    resultado.innerHTML = `Preencha todos os campos !!`
}


}