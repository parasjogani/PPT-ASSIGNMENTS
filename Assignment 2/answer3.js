
// Answer 3
function findHarmonious(nums) {
    const freq = {};
    let maxLen = 0;

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num in freq) {
        num = parseInt(num);
        if (freq[num - 1] && freq[num + 1]) {
            const len = freq[num] + freq[num + 1];
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
}

//Example
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findHarmonious(nums)); // 5

