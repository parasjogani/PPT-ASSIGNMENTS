
// Answer 7
function swap(str, i, j) {
    let temp;
    let charArray = str.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
}

function generatePermutations(str, left, right, permutations) {
    if (left === right) {
        permutations.push(str);
    } else {
        for (let i = left; i <= right; i++) {
            str = swap(str, left, i);
            generatePermutations(str, left + 1, right, permutations);
            str = swap(str, left, i);
        }
    }
}

function printPermutations(s) {
    let permutations = [];
    generatePermutations(s, 0, s.length - 1, permutations);
    return permutations;
}

let S = "ABC";
let result = printPermutations(S);
console.log(result);
