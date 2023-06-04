
// Answer 8

function realArray(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }

    const counter = new Map();
    const result = [];

    for (let num of changed) {
        counter.set(num, counter.get(num) + 1 || 1);
    }

    changed.sort((a, b) => a - b);

    for (let num of changed) {
        if (counter.get(num) === 0) {
            continue;
        }

        const doubledNum = num * 2;
        const doubledCount = counter.get(doubledNum) || 0;

        if (doubledCount === 0) {
            return [];
        }

        counter.set(num, counter.get(num) - 1);
        counter.set(doubledNum, doubledCount - 1);
        result.push(num);
    }

    return result;
}

// Example

const changed = [1, 3, 4, 5, 2, 6, 8, 10];
console.log(realArray(changed)); // [ 1, 3, 4, 5 ]
