
// Answer 4
function calculateStringLength(str) {
    // Base case
    if (str === '') {
        return 0;
    }

    // Recursive case
    return 1 + calculateStringLength(str.slice(1));
}

// Example
console.log(calculateStringLength("Hello World!")); // 12
