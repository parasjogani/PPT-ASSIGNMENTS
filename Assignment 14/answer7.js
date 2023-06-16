
// Answer 7
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const nextLargerNodes = function (head) {
    const stack = [];
    const result = [];
    let node = head;
    let index = 0;

    while (node) {
        result[index] = 0;

        while (stack.length > 0 && stack[stack.length - 1].val < node.val) {
            const prevNode = stack.pop();
            result[prevNode.index] = node.val;
        }

        stack.push({ val: node.val, index });

        node = node.next;
        index++;
    }

    return result;
};

// Example
// Create the linked list: 2 -> 7 -> 4 -> 3 -> 5
const head = new ListNode(2);
head.next = new ListNode(7);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(5);

const result = nextLargerNodes(head);

console.log(result); // [7, 0, 5, 5, 0]
