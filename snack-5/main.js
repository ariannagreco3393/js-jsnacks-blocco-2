/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

let numbers = [1,2,3,4]

let digits = [1,]

let i = 0
while (numbers.length > digits.length) {
    digits.push(Math.floor(Math.random() * 10)) 
    i++
}
    
console.log(digits);