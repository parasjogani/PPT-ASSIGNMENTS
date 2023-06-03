
// Answer 3
function transpose(matrix) {
    const numRows = matrix.length;
    const numColumns = matrix[0].length;

    const result = Array.from({ length: numColumns }, () => Array(numRows).fill(0));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

// Example
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = transpose(matrix);
console.log(result); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
