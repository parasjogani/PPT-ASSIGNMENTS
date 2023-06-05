
// Answer 2
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const element = matrix[row][col];

        if (element === target) {
            return true;
        } else if (element < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

// Example

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
let target = 3;
console.log(searchMatrix(matrix, target))


