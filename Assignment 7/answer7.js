
// Answer 7
function buildString(str) {
    const stack = [];

    for (let char of str) {
        if (char !== '#') {
            stack.push(char);
        } else if (stack.length > 0) {
            stack.pop();
        }
    }

    return stack.join('');
}

function backspaceCompare(s, t) {
    const finalS = buildString(s);
    const finalT = buildString(t);

    return finalS === finalT;
}


// Example
const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));  // true
