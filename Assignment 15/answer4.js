
// Answer 4
function reverseStack(stack) {
    if (stack.length <= 1) {
        return stack;
    }

    const topElement = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, topElement);
    return stack;
}

function insertAtBottom(stack, element) {
    if (stack.length === 0) {
        stack.push(element);
        return;
    }

    const topElement = stack.pop();
    insertAtBottom(stack, element);
    stack.push(topElement);
}


// Example usage
const stack = [1, 2, 3, 4, 5];
const reversedStack = reverseStack(stack);
console.log(reversedStack); // [ 5, 4, 3, 2, 1 ]

