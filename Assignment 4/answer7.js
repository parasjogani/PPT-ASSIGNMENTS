
// Answer 7
function maxCount(m, n, ops) {
    let minRow = m;
    let minColumn = n;

    for (const [ai, bi] of ops) {
        minRow = Math.min(minRow, ai);
        minColumn = Math.min(minColumn, bi);
    }

    return minRow * minColumn;
}

// Example usage:
const m = 3;
const n = 3;
const ops = [[2, 2], [3, 3]];
const result = maxCount(m, n, ops);
console.log(result); // 4
