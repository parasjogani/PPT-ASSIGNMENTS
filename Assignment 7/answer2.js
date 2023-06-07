
// Answer 2
function isStrobogrammatic(num) {
    const mapping = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6',
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const digitL = num[left];
        const digitR = num[right];

        if (!mapping.hasOwnProperty(digitL) || mapping[digitL] !== digitR) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Example
const num = "69";
console.log(isStrobogrammatic(num));  // true
