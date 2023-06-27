
// Answer 1
function firstUniqChar(s) {
    let charFreq = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charFreq[char]) {
            charFreq[char] += 1;
        } else {
            charFreq[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charFreq[char] === 1) {
            return i;
        }
    }

    return -1;
}

// Example
let s = "leetcode";
console.log(firstUniqChar(s)); // 0

let p = "loveleetcode";
console.log(firstUniqChar(p)); // 2
