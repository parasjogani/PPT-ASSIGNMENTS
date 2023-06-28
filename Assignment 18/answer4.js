
// Answer 4
function maximumGap(nums) {
    if (nums.length < 2) {
        return 0;
    }

    let maxNum = Math.max(...nums);

    let bucketSize = Math.max(1, Math.floor(maxNum / nums.length));
    let numBuckets = Math.floor(maxNum / bucketSize) + 1;

    let buckets = Array(numBuckets).fill().map(() => (
        {
            min: Infinity, max: -Infinity
        }
    ));

    for (let num of nums) {
        let bucketIndex = Math.floor(num / bucketSize);
        buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num);
        buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num);
    }

    let maxGap = 0;
    let prevMax = buckets[0].max;

    for (let i = 1; i < numBuckets; i++) {
        if (buckets[i].min !== Infinity) {
            maxGap = Math.max(maxGap, buckets[i].min - prevMax);
            prevMax = buckets[i].max;
        }
    }

    return maxGap;
}

// Example
const nums = [3, 6, 9, 1];
const maxGap = maximumGap(nums);
console.log(maxGap); // 3
