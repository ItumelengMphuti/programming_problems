function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // return indices
            }
        }
    }
    return []; // if no match found
}

let sum = twoSum([2, 7, 11, 15], 9);
console.log(sum); // [0, 1]

function isPalindrome (x) {
    let num = x.toString();
    for(let i = 0; i < num.length / 2; i++) {
        if(num[i] !== num[num.length - 1 - i]) {
            return false
        } 
    }
    return true 
};
 let pali = isPalindrome(221)
 console.log(pali)