
// Answer 2
function placeCoins(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const totalCoins = (mid * (mid + 1)) / 2;

        if (totalCoins <= n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

// Example
const n = 5;
const result = placeCoins(n);
console.log(result); // 2