
// Answer 2
function findDistinctInt(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result1 = nums1.filter(num => !set2.has(num));
    const result2 = nums2.filter(num => !set1.has(num));

    return [result1, result2];
}


// Example
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDistinctInt(nums1, nums2);
console.log(result); // [[1, 3], [4, 6]]
