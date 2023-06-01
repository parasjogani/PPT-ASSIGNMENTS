
// Answer 2
function eatCandies(candyType) {
    const maxEat = candyType.length / 2;
    const uniqueCandies = new Set();

    for (let i = 0; i < candyType.length; i++) {
        uniqueCandies.add(candyType[i]);

        if (uniqueCandies.size >= maxEat) {
            return maxEat;
        }
    }

    return uniqueCandies.size;
}

// Example
const candyType = [1, 1, 2, 2, 3, 3, 4, 4];
console.log(eatCandies(candyType)); // 4

