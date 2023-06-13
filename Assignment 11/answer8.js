
// Answer 8
function intersect(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    nums1.sort((a, b) => a - b);

    const intersection = [];

    for (const num of nums2) {
        const index = binarySearch(nums1, num);
        if (index !== -1) {
            intersection.push(num);
            nums1.splice(index, 1);
        }
    }

    return intersection;
}

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // [2, 2]
