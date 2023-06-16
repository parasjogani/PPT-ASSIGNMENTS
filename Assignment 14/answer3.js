
// Answer 3
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}

function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let merged;

    if (list1.data < list2.data) {
        merged = list1;
        merged.bottom = mergeTwoLists(list1.bottom, list2);
    } else {
        merged = list2;
        merged.bottom = mergeTwoLists(list1, list2.bottom);
    }

    return merged;
}

function flattenLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }

    head.next = flattenLinkedList(head.next);

    head = mergeTwoLists(head, head.next);

    return head;
}

// Example
let head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(19);
head.next.next.next = new ListNode(28);

head.bottom = new ListNode(7);
head.bottom.bottom = new ListNode(8);
head.bottom.bottom.bottom = new ListNode(30);

head.next.bottom = new ListNode(20);

head.next.next.bottom = new ListNode(22);
head.next.next.bottom.bottom = new ListNode(50);

head.next.next.next.bottom = new ListNode(35);
head.next.next.next.bottom.bottom = new ListNode(40);
head.next.next.next.bottom.bottom.bottom = new ListNode(45);

let flattened = flattenLinkedList(head);

let current = flattened;
while (current) {
    console.log(current.data); // 5 7 8 10 19 20 22 28 30 35 40 45 50
    current = current.bottom;
}
