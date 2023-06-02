
// Answer 4
function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}


// Example 
let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target));  // 2
