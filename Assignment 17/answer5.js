
// Answer 5
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findTheWinner(n, k) {
    let head = new ListNode(1);
    let current = head;

    for (let i = 2; i <= n; i++) {
        current.next = new ListNode(i);
        current = current.next;
    }

    current.next = head;

    while (head.next !== head) {
        for (let i = 1; i < k - 1; i++) {
            head = head.next;
        }

        head.next = head.next.next;

        head = head.next;
    }

    return head.val;
}

// Example
console.log(findTheWinner(5, 2)); // 3

