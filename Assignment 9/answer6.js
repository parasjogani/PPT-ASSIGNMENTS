
// Answer 6
function findNthTerm(a, d, n) {
    let nthTerm = a + (n - 1) * d;
    return nthTerm;
}

let a = 2;
let d = 1;
let n = 5;

let nthTerm = findNthTerm(a, d, n);
console.log("The", n, "th term of the series is:", nthTerm); // The 5 th term of the series is: 6

