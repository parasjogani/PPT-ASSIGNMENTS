
// Answer 1
function sum(nums, target) {
    const newnums = {};

    for(let i=0;i<nums.length;i++){
        const subNum = target - nums[i];

        if(subNum in newnums){
            return [newnums[subNum], i];
        }
        newnums[nums[i]] = i;
    }

    return []; //if no solution
}


//Example:

const nums = [1, 5, 9, 10, 13, 16];
const target = 26;
const result = sum(nums, target);
console.log(result); // [3, 5]