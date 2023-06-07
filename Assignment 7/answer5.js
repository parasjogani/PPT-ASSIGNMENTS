
// Answer 5
function reverseStr(s, k) {
    const chars = s.split('');
    const n = chars.length;

    for (let i = 0; i < n; i += 2 * k) {
        let start = i;
        let end = Math.min(start + k - 1, n - 1);

        while (start < end) {
            [chars[start], chars[end]] = [chars[end], chars[start]];
            start++;
            end--;
        }
    }

    return chars.join('');
}


// Example
const s = "abcdefg";
const k = 2;
console.log(reverseStr(s, k));  // "bacdfeg"
