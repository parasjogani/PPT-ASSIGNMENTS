
// Answer 6
function singleNumber(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
}

// Example
let nums = [2, 2, 1];
console.log(singleNumber(nums));  // 1
