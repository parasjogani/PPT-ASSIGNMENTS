
// Answer 8
function productOfArrayElements(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

let arr1 = [1, 2, 3, 4, 5];
let result1 = productOfArrayElements(arr1);
console.log(result1); // 120

let arr2 = [1, 6, 3];
let result2 = productOfArrayElements(arr2);
console.log(result2); // 18
