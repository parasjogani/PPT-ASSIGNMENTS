
// Answer 8
function attendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }

    return true;
}

// Example
let intervals = [[0, 30], [5, 10], [15, 20]];
console.log(attendMeetings(intervals));  // false
