
// Answer 8
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function deleteNodeWithValue(head, x) {
    if (head === null) {
        return null;
    }

    let current = head;

    while (current !== null) {
        if (current.data === x) {
            if (current.prev !== null) {
                current.prev.next = current.next;
            } else {
                head = current.next;
                if (head !== null) {
                    head.prev = null;
                }
            }

            if (current.next !== null) {
                current.next.prev = current.prev;
            }

            break;
        }

        current = current.next;
    }

    return head;
}

// Example usage
const head = new Node(1);
const second = new Node(3);
const third = new Node(4);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

const x = 4;
const modifiedHead = deleteNodeWithValue(head, x);

current = modifiedHead;
while (current !== null) {
    console.log(current.data); // 1 3
    current = current.next;
}
