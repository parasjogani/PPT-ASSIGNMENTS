
// Answer 2
function removeNumbers(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

//Example:
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeNumbers(nums, val);
console.log(result); // 2
console.log(nums); // [2, 2, 2, 3]