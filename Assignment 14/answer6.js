
// Answer 6
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function leftShift(head, k) {
    if (head === null || k <= 0) {
        return head;
    }

    let current = head;
    for (let i = 1; i < k; i++) {
        if (current.next === null) {
            return head;
        }
        current = current.next;
    }

    let newHead = current.next;
    current.next = null;

    current = newHead;
    while (current.next) {
        current = current.next;
    }

    current.next = head;

    return newHead;
}

// Example
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let k = 2;

let newHead = leftShift(head, k);

let current = newHead;
while (current) {
    console.log(current.data);
    current = current.next;
}
console.log("null");
