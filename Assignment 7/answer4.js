
// Answer 4
function reverseWords(s) {
    const words = s.split(' ');
    const reversedWords = [];

    for (let word of words) {
        reversedWords.push(reverseString(word));
    }

    return reversedWords.join(' ');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}


// Example
const s = "Let's take LeetCode contest";
console.log(reverseWords(s));  // "s'teL ekat edoCteeL tsetnoc"
