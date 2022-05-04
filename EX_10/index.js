var nome = String(window.prompt('Informe o nome do funcionário'))
var ano = Number(window.prompt('Informe o ano de nascimento'))
var ingresso = Number(window.prompt('Informe o ano de ingresso na empresa'))
var atual = Number(window.prompt('Insira o ano atual'))

var ano_serv = atual - ingresso
var nasc = atual - ano


if ((ano >= 65 && ano_serv >= 30)&&( nasc >= 60 && ano_serv >=25)){
    document.write(`${nome} <br>`)
    document.write(`A idade do funcionário é: ${nasc} anos <br>`)
    document.write(`Seu tempo de serviço é: ${ano_serv} anos <br>`)
    document.write(`Requerer aposentadoria`)
} else {
    document.write(`${nome} <br>`)
    document.write(`A idade do funcionário é: ${nasc} anos <br>`)
    document.write(`Seu tempo de serviço é: ${ano_serv} anos <br>`)
    document.write(`Não requerer`)
}
