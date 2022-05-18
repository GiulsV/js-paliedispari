// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt('Inserisci una parola per controllare se è palindroma: ');

const valore = checkIfPalindrome(parola);


function checkIfPalindrome(parola) {
    const lunghezza = parola.length;

    for (let i = 0; i < lunghezza / 2; i++){
        if (parola[i] !== parola[lunghezza - 1 - i]) {
            return alert('Non è palindroma');
        }
    }
    return alert('É palindroma');
}

