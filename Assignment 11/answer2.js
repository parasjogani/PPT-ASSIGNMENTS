
// Answer 2
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (
            (mid === 0 || nums[mid] > nums[mid - 1]) &&
            (mid === nums.length - 1 || nums[mid] > nums[mid + 1])
        ) {
            return mid;
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

// Example
const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums)); // 2

