/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str){

    // store the counter for every vowel found
    let counter = 0
    let foundVowels = []
    const vowels = ['a','e','i','o','u']

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        console.log(char);
        if (vowels.icludes) {
            
        }
        
    }
    // return the counter
    return counter
}

// Invoca la funzione qui e stampa il risultato in console

countVowels(word)

// Risultato atteso se si passa 'javascript': 3 (a, a, i)