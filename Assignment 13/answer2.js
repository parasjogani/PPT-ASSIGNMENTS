
// Answer 2
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeDuplicates(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;
    while (current.next !== null) {
        if (current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// Example
const head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(43);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(60);

removeDuplicates(head);

current = head;
while (current !== null) {
    console.log(current.data); // 11 21 43 60
    current = current.next;
}

