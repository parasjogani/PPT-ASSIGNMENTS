
// Amswer 4:
function addOne(numbers) {
    let carry = 1;

    for (let i = numbers.length - 1; i >= 0; i--) {
        numbers[i] += carry;
        carry = Math.floor(numbers[i] / 10);
        numbers[i] %= 10;

        if (carry === 0) {
            break;
        }
    }
    if (carry === 1) {
        numbers.unshift(1);
    }

    return numbers;
}

// Example:
const numbers = [9, 9, 9];
const result = addOne(numbers);
console.log(result); // [1, 0, 0, 0]