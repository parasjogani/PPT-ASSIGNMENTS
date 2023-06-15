
// Answer 5
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteLastOccurrence(head, key) {
    if (head === null) {
        return null;
    }

    let lastOccurrence = null;
    let current = head;

    while (current !== null) {
        if (current.data === key) {
            lastOccurrence = current;
        }

        current = current.next;
    }

    if (lastOccurrence === null) {
        return head;
    }

    if (lastOccurrence === head) {
        head = head.next;
        return head;
    }

    current = head;
    while (current.next !== lastOccurrence) {
        current = current.next;
    }

    current.next = lastOccurrence.next;

    return head;
}

// Example
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

const key = 2;

const modifiedHead = deleteLastOccurrence(head, key);

current = modifiedHead;
while (current !== null) {
    console.log(current.data); // 1 2 3 5 10
    current = current.next;
}

