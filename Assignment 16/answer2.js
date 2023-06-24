
// Answer 2
function sortStack(stack) {
    const tempStack = [];

    while (stack.length > 0) {
        const temp = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
            stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }
}


// Example
const stack = [34, 3, 31, 98, 92, 23]
sortStack(stack);
console.log(stack); // [ 3, 23, 31, 34, 92, 98 ]
