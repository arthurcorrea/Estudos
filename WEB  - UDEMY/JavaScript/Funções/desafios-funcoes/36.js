/* 36)  Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

function mostrarNumero(valores, id) {

    let resultado = []

    valores.forEach(valorAtual => {
        resultado.push(valorAtual * id)
    })

    return resultado

}

function segundaFuncao(valores = [], id) {

    if(id > 5) {
        let resultado = []

        valores.forEach(valorAtual => {
            resultado.push(valorAtual * id)
        })

        return resultado

    } else {
        return 'Blé'
    }

}

console.log(mostrarNumero([5, 3], 2))

console.log(segundaFuncao([6, 6, 9], 6))