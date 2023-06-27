
// Answer 7
function countWordsLeft(sequence) {
    const stack = [];

    for (let i = 0; i < sequence.length; i++) {
        const currentWord = sequence[i];

        if (stack.length === 0 || currentWord !== stack[stack.length - 1]) {
            stack.push(currentWord);
        } else {
            stack.pop();
        }
    }

    return stack.length;
}

// Example
const sequence = ["ab", "aa", "aa", "bcd", "ab"];
console.log("Number of words left:", countWordsLeft(sequence));
