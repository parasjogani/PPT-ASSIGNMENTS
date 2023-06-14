
// Answer 8
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isCircular(head) {
    if (head === null) {
        // An empty linked list is not circular
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// Example

// Create a circular linked list: 10 -> 12 -> 14 -> 16
let head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(14);
head.next.next.next = new Node(16);

console.log(isCircular(head)); // false
