
// Answer 1
function moveZero(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// Example
let nums = [0, 1, 0, 3, 12];
console.log(moveZero(nums)); // [ 1, 3, 12, 0, 0 ]
