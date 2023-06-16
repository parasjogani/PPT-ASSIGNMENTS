
// Answer 2
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addOne(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let i = head;
    let notNine = dummy;

    while (i) {
        if (i.val !== 9) {
            notNine = i;
        }
        i = i.next;
    }

    notNine.val++;
    i = notNine.next;
    while (i) {
        i.val = 0;
        i = i.next;
    }

    if (dummy.val === 1) {
        return dummy;
    }

    return dummy.next;
}

// Example
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(6);

let result = addOne(head);

let current = result;
let output = '';
while (current) {
    output += current.val;
    current = current.next;
}

console.log(output); // 457
