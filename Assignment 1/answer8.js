
// Answer 8
function wrongNum(nums) {
    nums.sort((a, b) => a - b);
    let same = 0;
    let actualNum = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            same = nums[i];
        } else if (nums[i] - nums[i - 1] > 1) {
            actualNum = nums[i - 1] + 1;
        }
    }

    if (actualNum === 0) {
        actualNum = nums.length;
    }

    return [same, actualNum];
}


//Example
const nums = [1, 2, 4, 4, 3, 5];
const result = wrongNum(nums);
console.log(result); // [ 4, 6 ]