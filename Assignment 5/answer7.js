
// Answer 7
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return nums[start];
}

// Example
const nums = [3, 4, 5, 1, 2];
console.log(findMin(nums)); // 1
