/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una 
lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

let firstname = ['arianna', 'elisa', 'giovanni', 'luca',]
let surname = ['greco', 'rossi', 'bianchi', 'verdi',]
let list = []

i = 0
while (i < firstname.length && surname.length) {
    list.push(firstname[i] + surname[i])
    i++
}

console.log(list);
