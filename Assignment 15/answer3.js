
// Answer 3
class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        this.q1.push(value);
    }

    pop() {
        if (this.q1.length === 0) {
            return -1;
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const poppedValue = this.q1.shift();

        [this.q1, this.q2] = [this.q2, this.q1];

        return poppedValue;
    }
}

// Example usage
const stack = new Stack();

stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // -1 (stack is empty)
stack.push(3);
console.log(stack.pop()); // 3
