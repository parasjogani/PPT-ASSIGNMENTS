
// Answer 6
function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatS = s + s;
    return concatS.includes(goal);
}

// Example
const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal));  // true
