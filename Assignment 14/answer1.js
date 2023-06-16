
// Answer 1
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function detectAndRemoveLoop(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    if (slow !== fast) {
        return head;
    }

    slow = head;

    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = null;

    return head;
}

// Example

// Create a linked list with a loop: 1 -> 2 -> 3 -> 4 -> 5 -> 3 
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next; // Creating a loop

// Remove the loop from the linked list
head = detectAndRemoveLoop(head);

let current = head;
while (current !== null) {
    console.log(current.data); // 1 2 3 4 5
    current = current.next;
}