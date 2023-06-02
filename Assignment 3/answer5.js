

// Answer 5 
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
const numbers = [5, 6, 7];
const result = addOne(numbers);
console.log(result); // [5, 6, 8]