
// Answer 2
function lastRemaining(n) {
    let leftToRight = true;
    let remaining = n;
    let step = 1;
    let start = 1;

    while (remaining > 1) {
        if (leftToRight || remaining % 2 === 1) {
            start += step;
        }

        step *= 2;
        remaining = Math.floor(remaining / 2);
        leftToRight = !leftToRight;
    }

    return start;
}

// Example
console.log(lastRemaining(9)); // 6

