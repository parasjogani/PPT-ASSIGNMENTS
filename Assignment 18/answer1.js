
// Answer 1
function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];

        if (interval[0] <= currInterval[1]) {
            currInterval[1] = Math.max(currInterval[1], interval[1]);
        } else {
            mergedIntervals.push(currInterval);
            currInterval = interval;
        }
    }

    mergedIntervals.push(currInterval);

    return mergedIntervals;
}

// Example
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log(merged); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
