
// Answer 3
function validMountainArray(arr) {
    const n = arr.length;

    if (n < 3) {
        return false;
    }

    let peakIndex = 0;

    while (peakIndex < n - 1 && arr[peakIndex] < arr[peakIndex + 1]) {
        peakIndex++;
    }

    if (peakIndex === 0 || peakIndex === n - 1) {
        return false;
    }

    while (peakIndex < n - 1 && arr[peakIndex] > arr[peakIndex + 1]) {
        peakIndex++;
    }

    return peakIndex === n - 1;
}

// Example
let arr = [1, 2, 1, 3]
console.log(validMountainArray(arr)); // False

