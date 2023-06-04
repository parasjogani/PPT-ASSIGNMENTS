
// Answer 6
function duplicates(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        } else {
            result.push(Math.abs(nums[i]));
        }
    }

    return result;
}

// Example
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(duplicates(nums)); // [ 2, 3 ]
