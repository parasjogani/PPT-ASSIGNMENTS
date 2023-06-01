
// Answer 5
function maxProduct(nums) {
    nums.sort((a, b) => a - b); // Sorting Array

    const n = nums.length;
    const p1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // last three number product
    const p2 = nums[0] * nums[1] * nums[n - 1]; // first two num. and last num. product

    return Math.max(p1, p2);
}

// Example
const nums = [2, 3, 4];
console.log(maxProduct(nums)); // 24
