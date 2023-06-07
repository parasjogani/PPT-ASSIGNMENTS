
// Answer 8
function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((y - y1) * (x - x2) !== (y - y2) * (x - x1)) {
            return false;
        }
    }

    return true;
}


// Example
const coordinates = [[1, 1], [2, 2], [3, 3], [4, 4]];
console.log(checkStraightLine(coordinates));  // true
