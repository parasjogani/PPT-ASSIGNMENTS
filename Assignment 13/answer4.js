
// Answer 4
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseAlternateKNodes(head, k) {
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;

    while (count < k && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    if (next !== null) {
        head.next = next;
        count = 0;

        while (count < k - 1 && current !== null) {
            current = current.next;
            count++;
        }

        if (current !== null) {
            current.next = reverseAlternateKNodes(current.next, k);
        }
    }

    return prev;
}

// Example
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

const k = 3;

const reversedHead = reverseAlternateKNodes(head, k);

current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
