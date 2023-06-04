
// Answer 5
function distance(arr1, arr2, d) {
    let dist = 0;

    for (let num1 of arr1) {
        let latestDistance = false;

        for (let num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                latestDistance = true;
                break;
            }
        }

        if (!latestDistance) {
            dist++;
        }
    }

    return dist;
}


// Example 

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const result = distance(arr1, arr2, d);
console.log(result);
