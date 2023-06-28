
// Answer 7
function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

// Example
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const longestSubsequence = lengthOfLIS(nums);
console.log(longestSubsequence); // 4

const nums2 = [7, 7, 7, 7, 7, 7, 7]
const longestSubsequence2 = lengthOfLIS(nums2);
console.log(longestSubsequence2); // 1
