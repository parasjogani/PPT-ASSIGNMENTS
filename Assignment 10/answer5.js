
// Answer 5
function checkEquality(s) {
    return (s.charAt(0) == s.charAt(s.length - 1));
}

function countSubstringWithEqualEnds(s) {
    let result = 0;
    let n = s.length;

    for (let i = 0; i < n; i++)

        for (let len = 1; len <= n - i; len++)

            if (checkEquality(s.substring(i, i + len)))
                result++;

    return result;
}

// Example

let s = "abcab";
console.log(countSubstringWithEqualEnds(s));