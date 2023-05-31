
// Answer 7:
function replaceZero(nums) {
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++;
    }
}


const nums = [0, 1, 0, 3, 10, 5, 0];
replaceZero(nums);
console.log(nums); // [1, 3, 10, 5, 0, 0, 0]
