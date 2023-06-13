
// Answer 5
function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const intersection = [];

    for (const num of nums1) {
        if (
            binarySearch(nums2, num) !== -1 &&
            intersection.indexOf(num) === -1
        ) {
            intersection.push(num);
        }
    }

    return intersection;
}


// Example
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // [2]

