
// Answer 2
function findNearestSmallerElements(a) {
    const stack = [];
    const result = new Array(a.length).fill(-1);

    for (let i = 0; i < a.length; i++) {
        while (stack.length && stack[stack.length - 1] >= a[i]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(a[i]);
    }

    return result;
}

// Example
const a = [1, 6, 2];
const result = findNearestSmallerElements(a);
console.log(result); // [ -1, 1, 1 ]
