
// Answer 6:
function twiceNum(nums){
    const set = new Set();

    for(let num of nums){
        if(set.has(num)){
            return true;
        }
        set.add(num);
    }

    return false;
}

// Example
const nums = [1, 2, 3, 4, 2];
const result = twiceNum(nums);
console.log(result);
