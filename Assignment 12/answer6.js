
// Answer 6
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function retainAndDelete(head, M, N) {
    let current = head;
    let previous = null;

    while (current !== null) {
        for (let i = 0; i < M && current !== null; i++) {
            previous = current;
            current = current.next;
        }

        for (let i = 0; i < N && current !== null; i++) {
            current = current.next;
        }

        previous.next = current;
    }

    return head;
}

// Example

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

let M = 2;
let N = 2;

head = retainAndDelete(head, M, N);

let current = head;
while (current !== null) {
    console.log(current.data); // 1 2 5 6
    current = current.next;
}
