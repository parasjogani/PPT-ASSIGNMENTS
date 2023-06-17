
// Answer 5
function reverseString(str) {
    const stack = [];
    const len = str.length;

    for (let i = 0; i < len; i++) {
        stack.push(str.charAt(i));
    }

    let reversedStr = '';

    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example
const inputString = 'Coding Is Love';
const reversedString = reverseString(inputString);
console.log(reversedString); // evoL sI gnidoC
