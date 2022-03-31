/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

//ciclo for
console.log('for');

let somma = 0

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('inserisci un numero')); //chiedo all'utente di inserire un numero 5 volte
    somma += userNumber //eseguo la somma dei numeri inseriti
}
console.log(somma);   


//ciclo while
console.log('while');

let somma2 = 0
let k = 0

while (k < 5) {
    let userNumber2 = parseInt(prompt('inserisci un numero'))//chiedo all'utente di inserire un numero 5 volte
    somma2 += userNumber2 //eseguo la somma dei numeri inseriti
    k++ 
}

console.log(somma2);   
