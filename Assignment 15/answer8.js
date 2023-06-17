
// Answer 8
function trapWater(heights) {
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left <= right) {
        if (heights[left] <= heights[right]) {
            leftMax = Math.max(leftMax, heights[left]);
            water += leftMax - heights[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, heights[right]);
            water += rightMax - heights[right];
            right--;
        }
    }

    return water;
}

// Example
const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const trappedWater = trapWater(elevationMap);
console.log(trappedWater);

