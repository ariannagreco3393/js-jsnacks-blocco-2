/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una 
lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

let firstname = ['arianna', 'elisa', 'giovanni', 'luca',]
let surname = ['greco', 'rossi', 'bianchi', 'verdi',]
let list = []


for (let i = 0; i < 8; i++) {
    const first_random = Math.floor(Math.random() * firstname.length)
    const second_random = Math.floor(Math.random() * surname.length)
    const firstnameList = firstname[first_random]
    const surnameList = surname[second_random]
    const fullName = firstnameList + ' ' + surnameList
    
    console.log(fullName);

}
