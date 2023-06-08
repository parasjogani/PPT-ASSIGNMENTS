
// Answer 8
function canSwapLetters(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const diffIndices = [];
    const diffChars = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
            diffChars.push(s[i]);
        }
    }

    if (diffIndices.length !== 2) {
        return false;
    }

    const index1 = diffIndices[0];
    const index2 = diffIndices[1];

    if (s[index1] === goal[index2] && s[index2] === goal[index1]) {
        return true;
    }

    return false;
}

// Example
let s = 'ab';
let goal = 'ba';
let result = canSwapLetters(s, goal);

console.log(result);  // true
