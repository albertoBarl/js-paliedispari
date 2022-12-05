// Chiedere all’utente di inserire una parola e Creare una funzione per capire se la parola inserita è palindroma

// 1- Inserire una parola
// 2- Creare una funzione
// 2.1- SE parola palindroma
// 2.2 ALTRIMENTI non è una parola palindroma

// 1.
let word = prompt('Inserire una parola');
console.log(word);

// 2.
function pal(role){
    let rev_word = role.split('').reverse().join('');
    return rev_word;
}

let reversed_word = pal(word)
console.log(reversed_word)

// 2.1 / 2.2
if(word == reversed_word){
    console.log('La parola è palindroma');
}
else{
    console.log('La parola non è palindroma');
}