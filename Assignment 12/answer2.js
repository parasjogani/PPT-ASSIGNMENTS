
// Answer 2
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasLoop(head) {
    let slowPtr = head;
    let fastPtr = head;

    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if (slowPtr === fastPtr) {
            return true; // Loop found
        }
    }

    return false; // No loop found
}

// Example
// Create a linked list with a loop: 1->2->3->4->5->2 
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next;

const hasLoopResult = hasLoop(head);
console.log(hasLoopResult); // true
