/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */



let nInteri = [1,2,3,4,5,6,7]
let somma = 0


let i = 0
while (i < nInteri.length) {
    if (nInteri.indexOf(i) % 2 != 0) {
        let dispari = i
        console.log(dispari);
        somma += dispari
    }
    
    i++
}

console.log(somma);





