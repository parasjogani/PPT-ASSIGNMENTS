
// Answer 4
function arrayMaxSum(nums) {
    nums.sort((a, b) => a - b);
    let maxSum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i];
    }

    return maxSum;
}

// Example
const nums = [1, 4, 3, 2];
const result = arrayMaxSum(nums);
console.log(result); // 4
