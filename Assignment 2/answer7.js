
// Answer 7
function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            isIncreasing = false;
        }
        if (nums[i] > nums[i - 1]) {
            isDecreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
}

//Example
const nums = [6, 5, 4, 4];
console.log(isMonotonic(nums)); // true
