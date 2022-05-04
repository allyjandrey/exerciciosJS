var escolha = String(window.prompt('Qual o tipo de combustível?'))
var ESalcool = String('alcool')
var ESgasolina = String('gasolina')
var precoA = prompt('Insira quantos litros de álcool')
var precoG = prompt('Insira quantos litros de gasolina')
var DESCalcool = 3
var DESCalcool2 = 5
var DESCgasolina = 4
var DESCgasolina2 = 6
var alcool = (preco*2.90*DESCalcool)/100
var alcoolD = (preco*2.90*DESCalcool2)/100
var gasolina = (preco*3.30*DESCgasolina)/100
var gasolinaD = (preco*3.30*DESCgasolina2)/100

if (escolha == ESalcool) {
    precoA (prompt('Insira quantos litros de álcool?'))
    if (precoA < 20) {
        document.write(`O preço por litro do álcool é:  ${alcool}`)
    } else if (precoA > 20) {
        document.write(`O preço por litro do álcool é: ${alcoolD}`)
    }
}

if (escolha == ESgasolina) {
    precoG (prompt('Insira quantos litros de gasolina?'))
    if (precoG < 20) {
        document.write(`O preço por litro da gasolina é: ${gasolina}`)
    } else if (precoG > 20) {
        document.write(`O preço por litro do álcool é: ${gasolinaD}`)
    }
}