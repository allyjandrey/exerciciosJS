var time1 = String(window.prompt('Nome do primeiro time'))
var ponto1 = Number(window.prompt('Pontuação do primeiro time'))
var time2 = String(window.prompt('Nome o segundo time'))
var ponto2 = Number(window.prompt('Pontuação do segundo time'))

if (ponto1 != ponto2){

    if (ponto1 > ponto2){
        document.write(`O time vencedor é o: ${time1} com ${ponto1} pontos`)
    }  else {
        if (ponto2 > ponto1){
            document.write(`O time vencedor é o: ${time2} com ${ponto2} pontos`)
        }
    }
} else {
    document.write(`EMPATE`)
}
