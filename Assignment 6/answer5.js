
// Answer 5
function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const n = nums1.length;
    let i = 0;
    let j = n - 1;
    let minProductSum = 0;
    while (i < n) {
        minProductSum += nums1[i] * nums2[j];
        i++;
        j--;
    }
    return minProductSum;
}

// Example
const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
console.log(minProductSum(nums1, nums2)); // 40
