/*
🏆 Snack 1

- Crea una funzione che somma due numeri.
- Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
- Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/
console.log("script avviato") // console.log di debug

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

const somma3 = (num1, num2) => {
    const result = num1 + num2
    return result
}

console.log(somma3(6, 6))

/*
🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

const quadrato = (num) => num * num

console.log("il quadrato del numero è:", quadrato(7))

/*
🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri:
due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

*/

function operatore(num1, num2) {
    const result = num1 * num2
    return result
}

function eseguiOperazione(num1, num2, callback) {
    console.log("il risultato della moltiplicazione è:")
    const risultato = callback(num1, num2)
    console.log(risultato)

}

eseguiOperazione(5, 5, operatore)

// versione con console.log esterno

function operatore2(num1, num2) {
    return num1 * num2
}

function eseguiOperazione2(num1, num2, callback) {
    return callback(num1, num2)
}

console.log("il risultato della moltiplicazione è:", eseguiOperazione2(3, 6, operatore))

/*
🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(time) {

    return setTimeout(() => {

        console.log("tempo scaduto")

    }, time)
}

creaTimer(5000)

/*
🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

// const message = setInterval(stampaOgniSecondo("che buona la pizza"), 1000)

// function stampaOgniSecondo(messaggio) {
//     console.log(messaggio)
// }

// clearInterval(message)

function stampaOgniSecondo(messaggio) {
    const timerId = setInterval(() => {
        console.log(messaggio)
    }, 1000)
    return timerId
}

let timerId = stampaOgniSecondo("che buona la pizza")

setTimeout(() => {
    clearInterval(timerId)
    console.log("clearInterval esercizio 5 attivato")
}, 6000)

/*
🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e
restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

let count = 0

function creaContatoreAutomatico(time) {
    return setInterval(() => {
        count++
    }, time)
}

console.log(creaContatoreAutomatico(1000))

function creaContatoreAutomatico(time) {

    // variabile nello scope esterno    
    let contatore = 0

    const timerID2 = setInterval(() => {
        contatore++
        console.log(contatore)
    }, time) // se non metto il parametro time, il delay di un secondo viene ignorato
    return timerID2
}

let timerID2 = creaContatoreAutomatico(1000)

setTimeout(() => {
    clearInterval(timerID2)
    console.log("clearInterval esercizio 6 attivato")
}, 8000)