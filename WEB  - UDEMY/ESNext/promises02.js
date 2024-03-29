/*
setTimeout(function() {
    console.log('Executando callback')
    
    setTimeout(function() {
        console.log('Executando callback')

        setTimeout(function() {
            console.log('Execuntando callback')
        }, 2000)
    }, 2000)
}, 2000) 
*/

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

esperarPor()    
    .then(() => esperarPor)
    .then(esperarPor)