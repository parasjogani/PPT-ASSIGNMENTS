
// Answer 8
function findMaxAbsoluteDifference(arr) {
    const n = arr.length;
    const leftStack = [];
    const rightStack = [];

    const leftSmaller = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (leftStack.length > 0 && arr[i] <= arr[leftStack[leftStack.length - 1]]) {
            leftStack.pop();
        }

        if (leftStack.length > 0) {
            leftSmaller[i] = arr[leftStack[leftStack.length - 1]];
        } else {
            leftSmaller[i] = 0;
        }

        leftStack.push(i);
    }

    const rightSmaller = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        while (rightStack.length > 0 && arr[i] <= arr[rightStack[rightStack.length - 1]]) {
            rightStack.pop();
        }

        if (rightStack.length > 0) {
            rightSmaller[i] = arr[rightStack[rightStack.length - 1]];
        } else {
            rightSmaller[i] = 0;
        }

        rightStack.push(i);
    }

    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
}

// Example
const arr = [2, 1, 8];
console.log("Maximum absolute difference:", findMaxAbsoluteDifference(arr));
