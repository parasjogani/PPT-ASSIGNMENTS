
// Answer 8
function find132pattern(nums) {
    const stack = [];
    let third = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < third) {
            return true;
        }

        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            third = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
}

// Example
const nums = [3, 1, 4, 2];
const has132pattern = find132pattern(nums);
console.log(has132pattern); // true

const nums2 = [1, 2, 3, 4];
const has132pattern2 = find132pattern(nums2);
console.log(has132pattern2); // false

