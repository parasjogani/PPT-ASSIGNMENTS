
// Answer 6
function reverseKElements(queue, k) {
    if (queue.length === 0 || k <= 0 || k > queue.length) {
        return queue;
    }

    const stack = [];
    const tempQueue = [];

    for (let i = 0; i < k; i++) {
        stack.push(queue.shift());
    }

    while (queue.length > 0) {
        tempQueue.push(queue.shift());
    }

    while (stack.length > 0) {
        tempQueue.push(stack.pop());
    }

    while (tempQueue.length > 0) {
        queue.push(tempQueue.shift());
    }

    return queue;
}

// Example usage
const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 5;
console.log(reverseKElements(queue, k)); // [6, 7, 8, 9, 10, 5, 4, 3, 2, 1]
