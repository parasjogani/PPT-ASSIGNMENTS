
// Answer 4
function findMaxLength(nums) {
    const countMap = new Map();
    countMap.set(0, -1);
    let maxLen = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;

        if (countMap.has(count)) {
            const prevIndex = countMap.get(count);
            maxLen = Math.max(maxLen, i - prevIndex);
        } else {
            countMap.set(count, i);
        }
    }

    return maxLen;
}

// Example
const nums = [0, 1, 0, 1];
const maxLength = findMaxLength(nums);
console.log(maxLength); // 4
