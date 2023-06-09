
// Answer 1
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

// Example
console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(3));  // false
