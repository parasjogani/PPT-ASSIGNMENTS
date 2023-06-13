
// Answer 7
function searchRange(nums, target) {
    let start = -1;
    let end = -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] >= target) {
            right = mid - 1;
            if (nums[mid] === target) {
                start = mid;
            }
        }
    }

    left = start;
    right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
            if (nums[mid] === target) {
                end = mid;
            }
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return [start, end];
}

// Example
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target)); // [3, 4]
