
// Answer 1
function isPowerOfThree(n) {
    if (n <= 0) {
        return false;
    }

    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
}

// Example
console.log(isPowerOfThree(27));  // true
