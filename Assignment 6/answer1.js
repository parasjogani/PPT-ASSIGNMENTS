
// Answer 1
function reconstructPermutation(s) {
    const n = s.length;
    const perm = [];
    let low = 0, high = n;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            perm.push(low);
            low++;
        } else if (s[i] === 'D') {
            perm.push(high);
            high--;
        }
    }

    perm.push(low);

    return perm;
}

// Example
const s = "IDID";
console.log(reconstructPermutation(s));
