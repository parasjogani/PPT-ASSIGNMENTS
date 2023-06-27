
// Answer 2
function maxSubarraySum(nums) {

    const maxSum = kadane(nums);

    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    const negNums = nums.map(num => -num);
    const minWrap = totalSum + kadane(negNums);

    if (minWrap !== 0 && minWrap > maxSum) {
        return minWrap;
    }

    return maxSum;
}

function kadane(nums) {
    let maxSum = -Infinity;
    let currSum = 0;

    for (let num of nums) {
        currSum += num;
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
}

// Example

const nums = [1, -2, 3, -2];
const maxSum = maxSubarraySum(nums);
console.log(maxSum); // 3
