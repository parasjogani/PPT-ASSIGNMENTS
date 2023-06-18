
// Answer 1
function Sqrt(x) {
    let start = 0;
    let end = x;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midSqr = mid * mid;

        if (midSqr === x) {
            return mid;
        } else if (midSqr < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end;
}

// Example
const x = 49;
const result = Sqrt(x);
console.log(result); // 7
