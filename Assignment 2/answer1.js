
// Answer 1
function minSum(nums) {
    nums.sort((a, b) => a - b); // For Sorting
    let minsum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        minsum += nums[i];
    }

    return minsum;
}

// Example
const nums = [1, 4, 3, 2, 5, 6];
console.log(minSum(nums)); // 9
