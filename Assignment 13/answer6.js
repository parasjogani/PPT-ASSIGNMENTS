
// Answer 6
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function mergeSortedLists(a, b) {
    const dummy = new Node(0);
    let prev = dummy;

    let currentA = a;
    let currentB = b;

    while (currentA !== null && currentB !== null) {
        if (currentA.data <= currentB.data) {
            prev.next = currentA;
            currentA = currentA.next;
        } else {
            prev.next = currentB;
            currentB = currentB.next;
        }

        prev = prev.next;
    }

    if (currentA !== null) {
        prev.next = currentA;
    }

    if (currentB !== null) {
        prev.next = currentB;
    }

    return dummy.next;
}

// Example
const a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);

const b = new Node(2);
b.next = new Node(3);
b.next.next = new Node(20);

const mergedHead = mergeSortedLists(a, b);

current = mergedHead;
while (current !== null) {
    console.log(current.data); // 2 3 5 10 15 20
    current = current.next;
}
