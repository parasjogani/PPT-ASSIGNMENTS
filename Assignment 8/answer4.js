
// Answer 4
class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function constructTree(s, start = 0) {
    if (start >= s.length || s[start] === ')') {
        return [null, start];
    }

    let end = start;
    while (end < s.length && !['(', ')'].includes(s[end])) {
        end++;
    }
    const value = parseInt(s.substring(start, end));
    const node = new TreeNode(value);
    start = end;

    if (start < s.length && s[start] === '(') {
        const [leftChild, nextStart] = constructTree(s, start + 1);
        node.left = leftChild;
        start = nextStart;
    }

    if (start < s.length && s[start] === '(') {
        const [rightChild, nextStart] = constructTree(s, start + 1);
        node.right = rightChild;
        start = nextStart;
    }

    if (start < s.length && s[start] === ')') {
        start++;
    }

    return [node, start];
}

function preorderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result;
}

// Example
const inputString = '4(2(3)(1))(6(5))';
const [root, _] = constructTree(inputString, 0);
const output = preorderTraversal(root);

console.log(output);

