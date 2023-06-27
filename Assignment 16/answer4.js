
// Answer 4

function checkIncreasingOrder(queue) {
    const stack = [];
    const auxiliaryQueue = [];
    let expected = 1;

    while (queue.length > 0) {
        const front = queue.shift();

        if (front === expected) {
            auxiliaryQueue.push(front);
            expected++;
        } else {
            if (stack.length === 0 || stack[stack.length - 1] > front) {
                stack.push(front);
            } else {
                return "No";
            }
        }
    }

    while (stack.length > 0) {
        const top = stack.pop();

        if (top === expected) {
            auxiliaryQueue.push(top);
            expected++;
        } else {
            return "No";
        }
    }

    if (queue.length === 0 && stack.length === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example
const queue = [5, 1, 2, 3, 4];
console.log(checkIncreasingOrder(queue)); // Yes
