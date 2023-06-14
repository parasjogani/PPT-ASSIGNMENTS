
// Answer 1
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let slowPtr = head;
    let fastPtr = head;
    let prevPtr = null;

    while (fastPtr !== null && fastPtr.next !== null) {
        fastPtr = fastPtr.next.next;
        prevPtr = slowPtr;
        slowPtr = slowPtr.next;
    }

    prevPtr.next = slowPtr.next;
    slowPtr.next = null;
    return head;
}


// Example
// Creating linked list 1->2->3->4->5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const modifiedHead = deleteMiddleNode(head);

let current = modifiedHead;
while (current !== null) {
    console.log(current.data); // 1 2 4 5
    current = current.next;
}
