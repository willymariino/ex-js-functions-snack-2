/*
🏆 Snack 1

- Crea una funzione che somma due numeri.
- Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
- Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

function somma(num1, num2) {
    const result = num1 + num2
    return result
}

const result1 = somma(3, 3)
console.log(result1)

// oppure 

console.log(somma(3, 3))

// come funzione anonima asseganta ad una variabile

const somma2 = function (num1, num2) {
    const result = num1 + num2
    return result
}

console.log(somma2(4, 4))

// come arrow function assegnata ad una variabile

