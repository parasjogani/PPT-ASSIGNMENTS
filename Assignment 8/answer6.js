
// Answer 6
function findAnagrams(s, p) {
    const result = [];
    const patternFreq = {};
    const windowFreq = {};

    for (let char of p) {
        patternFreq[char] = (patternFreq[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;

    while (right < s.length) {
        windowFreq[s[right]] = (windowFreq[s[right]] || 0) + 1;

        if (right - left + 1 > p.length) {
            windowFreq[s[left]]--;
            if (windowFreq[s[left]] === 0) {
                delete windowFreq[s[left]];
            }
            left++;
        }

        if (isEqual(patternFreq, windowFreq)) {
            result.push(left);
        }

        right++;
    }

    return result;
}

function isEqual(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) {
        return false;
    }

    for (let key in map1) {
        if (map1[key] !== map2[key]) {
            return false;
        }
    }

    return true;
}

// Example

let s = "cbaebabacd";
let p = "abc";
let indices = findAnagrams(s, p);

console.log(indices);  // [0, 6]
