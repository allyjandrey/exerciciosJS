var sal = prompt('Informe o salário do funcionário')
var porcento = prompt('Digite a porcentagem de reajuste: ')
var reajuste = sal*porcento/100
var novosal = sal+reajuste
document.write(`O novo sálario com o reajuste sera: ${novosal}`)