
// Answer 1
function convert1DTo2D(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    let result = new Array(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
    }

    for (let i = 0; i < original.length; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        result[row][col] = original[i];
    }

    return result;
}

// Example
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
console.log(convert1DTo2D(original, m, n));
