
// Answer 3
function sortedSquares(nums) {
    const squares = nums.map(num => num * num);
    squares.sort((a, b) => a - b);
    return squares;
}

// Example 
const nums = [-4, -1, 0, 3, 10, 5];
const result = sortedSquares(nums);
console.log(result); // [ 0, 1, 9, 16, 25, 100 ]