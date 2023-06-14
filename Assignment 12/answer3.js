
// Answer 3
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findNthFromEnd(head, N) {
    let first = head;
    let second = head;

    for (let i = 0; i < N; i++) {
        if (first === null) {
            return null;
        }
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second;
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

let N = 2;

let result = findNthFromEnd(head, N);
if (result === null) {
    console.log(`${N} is greater than the number of nodes in the linked list.`);
} else {
    console.log(`Value of the ${N} node from the end:`, result.data);
}
