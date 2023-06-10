
// Answer 8
function countConsonants(string) {
    var consonants = 0;
    var vowels = 'aeiouAEIOU';

    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (char.match(/[a-z]/i) && vowels.indexOf(char) === -1) {
            consonants++;
        }
    }

    return consonants;
}

// Example usage
var string = "Coding Is Love";
var consonantCount = countConsonants(string);
console.log("Total number of consonants:", consonantCount); // Total number of consonants: 7
