
// Answer 5
function containsDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

// Example
const nums = [1, 2, 3, 1];
const hasDuplicates = containsDuplicate(nums);
console.log(hasDuplicates); // true

