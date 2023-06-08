
// Answer 2
function isValid(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (char === '(' || char === '*') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    let openCount = 0;

    while (stack.length > 0) {
        const char = stack.pop();

        if (char === '(') {
            openCount++;
        } else if (char === '*') {
            if (openCount > 0) {
                openCount--;
            }
        } else {
            return false;
        }
    }

    return openCount === 0;
}


// Example
const s = "()";
const isValidString = isValid(s);
console.log(isValidString); // true
