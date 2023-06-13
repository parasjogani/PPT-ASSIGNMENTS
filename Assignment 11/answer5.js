
// Answer 5
function intersection(nums1, nums2) {
    const set = new Set();
    const intersection = [];

    for (const num of nums1) {
        set.add(num);
    }

    for (const num of nums2) {
        if (set.has(num)) {
            intersection.push(num);
            set.delete(num);
        }
    }

    return intersection;
}

// Example
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // [2]
