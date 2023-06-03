
// Answer 8
function transformArray(nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
}


// Example
let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
let output = transformArray(nums, n);
console.log(output); // [ 2, 3, 5, 4, 1, 7 ]
