//Link to challenge: - https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i=i-1;
        }
    }
    return nums.length;
};

//Below call for testing
console.log(removeElement([3,2,2,3], 3));

//expected output = length of [2, 2] i.e 2