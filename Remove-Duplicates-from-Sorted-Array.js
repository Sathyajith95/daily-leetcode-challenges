//Link to the challenge: - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1,1);
            i=i-1;
        }
    }
    // console.log(nums.length);
    return nums.length;
};

//Below call for testing
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

//expected output = length of [0,1,2,3,4,] i.e 5