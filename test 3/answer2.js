
// Answer 2
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        this.items.push(ele);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue()); // 1
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // Queue is empty
console.log(queue.isEmpty()); // true
