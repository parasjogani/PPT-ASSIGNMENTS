
// Answer 5
function reverseNumber(number) {
    const numberString = String(number);
    const stack = [];

    for (let i = 0; i < numberString.length; i++) {
        const digit = numberString[i];
        stack.push(digit);
    }

    let reversedNumber = "";

    while (stack.length > 0) {
        const poppedDigit = stack.pop();
        reversedNumber += poppedDigit;
    }

    return parseInt(reversedNumber);
}

// Example usage
const number = 6899;
console.log(reverseNumber(number)); //9986
