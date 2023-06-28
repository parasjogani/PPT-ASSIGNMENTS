
// Answer 3
function firstBadVersion(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function isBadVersion(version) {
    const badVersion = 4;

    return version >= badVersion;
}

const n = 5;
const firstBad = firstBadVersion(n);
console.log(firstBad); // 4
