
// Answer 7
function findMissingRanges(nums, lower, upper) {
    const result = [];
    let prev = lower - 1;

    for (let i = 0; i <= nums.length; i++) {
        let curr = i < nums.length ? nums[i] : upper + 1;

        if (curr - prev >= 2) {
            result.push(formatRange(prev + 1, curr - 1));
        }

        prev = curr;
    }

    return result;
}

function formatRange(start, end) {
    if (start === end) {
        return [start];
    } else {
        return [start, end];
    }
}


// Example
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

const result = findMissingRanges(nums, lower, upper);
console.log(result); // [ [ 2 ], [ 4, 49 ], [ 51, 74 ], [ 76, 99 ] ]
