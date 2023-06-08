
// Answer 7
function decodeString(s) {
    const stack = [];

    for (let c of s) {
        if (c !== ']') {
            stack.push(c);
        } else {
            let curr = stack.pop();
            let decodedStr = '';

            while (curr !== '[') {
                decodedStr = curr + decodedStr;
                curr = stack.pop();
            }

            let count = '';
            curr = stack.pop();

            while (!isNaN(curr)) {
                count = curr + count;
                curr = stack.pop();
            }

            stack.push(curr);
            stack.push(decodedStr.repeat(Number(count)));
        }
    }

    return stack.join('');
}


// Example
let s = '3[a]2[bc]';
let decodedString = decodeString(s);

console.log(decodedString);  // 'aaabcbc'
