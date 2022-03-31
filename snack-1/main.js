/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

//ciclo for
let somma = 0

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('inserisci un numero'));
    somma += userNumber 
}
console.log(somma);   


//ciclo while
let somma2 = 0
let k = 0

while (k < 5) {
    let userNumber2 = parseInt(prompt('inserisci un numero'))
    somma2 += userNumber2
    k++
}

console.log(somma2);   
