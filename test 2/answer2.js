
// Answer 2
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumber(l1, l2) {
    const dum = new ListNode(0);
    let currNode = dum;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 !== null ? l1.val : 0;
        const y = l2 !== null ? l2.val : 0;

        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(sum % 10);

        currNode.next = newNode;
        currNode = newNode;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        currNode.next = new ListNode(carry);
    }
    return dum.next;
}

// Example
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumber(l1, l2);

let temp = result;
const output = [];
while (temp !== null) {
    output.push(temp.val);
    temp = temp.next;
}

console.log(output); // [7, 0, 8]
