
// Answer 7
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function reverseDoublyLinkedList(head) {
    let current = head;

    while (current !== null) {
        const temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;

        if (current !== null && current.next === null) {
            head = current;
        }
    }

    return head;
}

// Example
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;
third.next = fourth;
fourth.prev = third;

const reversedHead = reverseDoublyLinkedList(head);

current = reversedHead;
while (current !== null) {
    console.log(current.data); // 4 3 2 1 
    current = current.next;
}
