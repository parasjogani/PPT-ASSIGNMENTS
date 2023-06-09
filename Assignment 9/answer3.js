
// Answer 3
function factorial(N) {
    let fact = 1;
    for (let i = 1; i <= N; i++) {
        fact *= i;
    }
    return fact;
}

// Example
console.log(factorial(5));  // 120
console.log(factorial(4));  // 24
