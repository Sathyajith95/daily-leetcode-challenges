//Link to challenge: - https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while(k > 0){
        nums.unshift(nums.pop());
        k--;
    }
    return nums;
};

//Below call for testing
console.log(rotate([1,2,3,4,5,6,7], 3));

//expected output = [5,6,7,1,2,3,4]