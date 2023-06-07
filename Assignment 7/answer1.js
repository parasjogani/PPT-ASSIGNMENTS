
// Answer 1
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToT = {};
    const tToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (!sToT[charS] && !tToS[charT]) {
            sToT[charS] = charT;
            tToS[charT] = charS;
        } else if (sToT[charS] !== charT || tToS[charT] !== charS) {
            return false;
        }
    }

    return true;
}


// Example
const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t));  // true
