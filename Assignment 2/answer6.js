
// Answer 6
// Using binary search algorithm
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

//Example
const nums = [-5, -2, 0, 1, 6, 8, 12, 15];
const target = 12;
console.log(search(nums, target)); // 6
