
// Answer 3:
// Using binary search algorithm
function searchNum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

//example:
const nums = [1, 4, 5, 8, 11, 15];
const target = 6;

const index = searchNum(nums, target);
console.log(index); // 3