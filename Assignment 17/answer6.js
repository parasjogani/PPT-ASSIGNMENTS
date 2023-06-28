
// Answer 6
let deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a)
    let res = []
    for (let i of deck) {
        if (res.length > 0) res.unshift(res.pop())
        res.unshift(i)
    }
    return res
};

// Example
const deck = [17, 13, 11, 2, 3, 5, 7]
console.log(deckRevealedIncreasing(deck)); // [2, 13 ,3 ,11 ,5 ,17 ,7]
