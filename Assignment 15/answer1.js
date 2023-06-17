
// Answer 1
function findNextGreaterElements(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return result;
}

// Example
const arr = [1, 3, 2, 4];
const result = findNextGreaterElements(arr);
console.log(result); // [ 3, 4, 4, -1 ]
