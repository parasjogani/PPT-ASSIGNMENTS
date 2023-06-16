
// Answer 8
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const removeZeroSumSublists = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let node = dummy;
    let prefixSum = 0;
    const prefixSums = {};

    while (node) {
        prefixSum += node.val;
        if (prefixSum in prefixSums) {
            let prev = prefixSums[prefixSum].next;
            let prevSum = prefixSum + prev.val;
            while (prev !== node) {
                delete prefixSums[prevSum];
                prev = prev.next;
                prevSum += prev.val;
            }
            prefixSums[prefixSum].next = node.next;
        } else {
            prefixSums[prefixSum] = node;
        }
        node = node.next;
    }

    return dummy.next;
};

// Example
// Create the linked list: 1 -> 2 -> -3 -> 3 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

const result = removeZeroSumSublists(head);

let current = result;
while (current) {
    console.log(current.val); // 3 1
    current = current.next;
}
