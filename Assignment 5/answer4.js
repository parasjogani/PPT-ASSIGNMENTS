
// Answer 4
function findNum(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const distinct_nums1 = [...set1].filter(num => !set2.has(num));
    const distinct_nums2 = [...set2].filter(num => !set1.has(num));

    return [distinct_nums1, distinct_nums2];
}

// Example
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findNum(nums1, nums2);
console.log(result); // [ [ 1, 3 ], [ 4, 6 ] ]
