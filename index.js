let vitorias = require('Insira a quantidade de vitórias')
let derrotas = require('Insira a quantidade de derrotas')
statusVitoriaDerrota(vitorias, derrotas)
//Problema ao apresentar o projeto, nos requisitos são instruídos para usarmos o saldo
// de vitórias como no texto "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
//No entanto nos é pedido para calcular saldo de rankeada (oq de fato deveria definir o nivel)
//O projeto nos induz ao erro e eu não tenho como saber qual é o verdadeiro caso.
//Por isso decidi usar saldo de rankeada.    
function statusVitoriaDerrota(vitorias, derrotas){
    let saldoRankeada = vitorias - derrotas
    let nivel = ''
    switch(saldoRankeada){
        case saldoRankeada <=10:
            nivel = 'Ferro'
            break
        case saldoRankeada <=20:
            nivel = 'Bronze'
            break
        case saldoRankeada <=50:
            nivel = 'Prata'
            break
        case saldoRankeada <=80:
            nivel = 'Ouro'
            break
        case saldoRankeada <=90:
            nivel = 'Diamante'
            break
        case saldoRankeada <=100:
            nivel = 'Lendário'
            break
        default:
            nivel = 'Imortal'
    }

    console.log("O Herói tem de saldo de " + saldoRankeada +" está no nível de" + nivel)
}
