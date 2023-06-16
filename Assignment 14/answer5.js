
// Answer 5
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const oddEvenList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return oddHead;
};



// Example
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const result = oddEvenList(head);

let current = result;
while (current) {
    console.log(current.val);
    current = current.next;
}
