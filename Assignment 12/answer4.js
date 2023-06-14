
// Answer 4
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isPalindrome(head) {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;

        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (prev !== null && slow !== null) {
        if (prev.data !== slow.data) {
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }

    return true;
}

// Example

// Create a linked list: R -> A -> D -> A -> R
let head = new Node('R');
head.next = new Node('A');
head.next.next = new Node('D');
head.next.next.next = new Node('A');
head.next.next.next.next = new Node('R');

console.log(isPalindrome(head)); // true
