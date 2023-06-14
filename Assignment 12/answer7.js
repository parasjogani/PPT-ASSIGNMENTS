
// Answer 7
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtAlternatePositions(head1, head2) {
    if (head1 === null) {
        head1 = head2;
        head2 = null;
        return head1;
    }

    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null && curr2 !== null) {
        let temp1 = curr1.next;
        let temp2 = curr2.next;

        curr1.next = curr2;
        curr2.next = temp1;

        curr1 = temp1;
        curr2 = temp2;
    }

    head2 = null;

    return head1;
}

// Example

// Create the first linked list: 5 -> 7 -> 17 -> 13 -> 11
let head1 = new Node(5);
head1.next = new Node(7);
head1.next.next = new Node(17);
head1.next.next.next = new Node(13);
head1.next.next.next.next = new Node(11);

// Create the second linked list: 12 -> 10 -> 2 -> 4 -> 6
let head2 = new Node(12);
head2.next = new Node(10);
head2.next.next = new Node(2);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(6);

head1 = insertAtAlternatePositions(head1, head2);

let current = head1;
while (current !== null) {
    console.log(current.data); // 5 12 7 10 17 2 13 4 11 6
    current = current.next;
}

current = head2;
while (current !== null) {
    console.log(current.data); // 12 7 10 17 2 13 4 11 6
    current = current.next;
}
