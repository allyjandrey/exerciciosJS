var porcentagem = 45.0
var DisImpostos = 28.0
var fabrica = prompt('Informe o custo de fábrica')
var percentual = (fabrica*porcentagem)/100
var impostos = (fabrica*DisImpostos)/100
var custo = Number(fabrica+percentual+impostos)

document.write(`O custo final é: ${custo}`)