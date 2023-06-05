
// Answer 7
function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;

    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        if (num > n * n) {
            break;
        }

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        if (num > n * n) {
            break;
        }

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        if (num > n * n) {
            break;
        }

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
}

// Example
console.log(generateMatrix(3)); // [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
