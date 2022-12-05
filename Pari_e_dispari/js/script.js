// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// 1- Scegliere pari o dispari
// 2- Inserire un numero da 1 a 5
// 3- Generare un numero random da 1 a 5 per l'AI
// 4- Sommare i due numeri
// 5- Stabilire se il numero uscito è pari o dispari
// 6- Dichiarare il vincitore

// let choice = prompt('Pari o dispari?')
// let P_num = parseInt(prompt('Scegli un numero da 1 a 5'))

// 1.
let P_par_dis = prompt('Pari o dispari?')
// 2.
let P_num = parseInt(prompt('Scegli un numero da 1 a 5.'))

// 3.
function random_num(){
    let r_num = Math.floor(Math.random() * 5 +1)
    return r_num
}

const AI_num = random_num()
console.log(AI_num)

// 4.
let somma = P_num + AI_num
console.log(somma)

// 5.
function par_dis(){
    if(somma%2 == 0){
        return 'Pari'
    }
    else{
        return 'Dispari'
    }
}

let verdict = par_dis()
console.log(verdict) 

