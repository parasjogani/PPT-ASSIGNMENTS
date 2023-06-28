
// Answer 6
function findMinArrowShots(points) {
    if (points.length === 0) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let currentEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > currentEnd) {
            arrows++;
            currentEnd = points[i][1];
        }
    }

    return arrows;
}

// Example
const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
const minArrows = findMinArrowShots(points);
console.log(minArrows); // 2

const points2 = [[1,2],[3,4],[5,6],[7,8]]
const minArrows2 = findMinArrowShots(points2);
console.log(minArrows2); // 4
