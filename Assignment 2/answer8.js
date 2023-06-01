
// Answer 8
function minScore(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;

    for (let num of nums) {
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    }

    const score = maxNum - minNum;

    if (score === 0) {
        return 0;
    }

    if (score > 2 * k) {
        return score - 2 * k;
    }

    return 0;
}

// Example
const nums = [1, 2, 3, 4, 5];
const k = 0;
console.log(minScore(nums, k)); // 4
