
// Answer 7
function permutations(str, start = 0) {
    if (start === str.length - 1) {
        console.log(str);
        return;
    }

    for (let i = start; i < str.length; i++) {
        str = swapCharacters(str, start, i);
        permutations(str, start + 1);
        str = swapCharacters(str, start, i); 
    }
}

function swapCharacters(str, i, j) {
    const charArray = str.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
}

permutations('abb'); //abb abb bab bba bba bab
