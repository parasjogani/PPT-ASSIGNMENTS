
// Answer 3
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseKNodes(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;

    while (count < k && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    if (next !== null) {
        head.next = reverseKNodes(next, k);
    }

    return prev;
}

// Example usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

const k = 4;

const reversedHead = reverseKNodes(head, k);

current = reversedHead;
while (current !== null) {
    console.log(current.data); // 4 2 2 1 8 7 6 5
    current = current.next;
}
