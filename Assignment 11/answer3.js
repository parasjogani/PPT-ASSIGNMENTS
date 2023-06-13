
// Answer 3
function missingNumber(nums) {
    const n = nums.length;
    let totalSum = (n * (n + 1)) / 2;

    for (let i = 0; i < n; i++) {
        totalSum -= nums[i];
    }

    return totalSum;
}

// Example
const nums = [3, 0, 1, 5, 2];
console.log(missingNumber(nums)); // 4
