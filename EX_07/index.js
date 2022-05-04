var preco = prompt('Digite a quantidade de maçãs')
var maca1 = preco*1.30
var maca2 = preco*1.00

if (preco<12){
    document.write(`O preço é de: ${maca1}`)
} else{
    document.write(`O preço é de: ${maca2}`)
}

