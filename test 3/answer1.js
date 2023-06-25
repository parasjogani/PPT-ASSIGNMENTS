
// Answer 1
class Stack {
    constructor() {
        this.items = [];
    }

    push(ele) {
        this.items.push(ele);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // Stack is empty
console.log(stack.isEmpty()); // true
