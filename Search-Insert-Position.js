//Link to the challenge: - https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)){
        return nums.indexOf(target);    
    }
    else {
        nums.push(target);
        nums.sort();
        return nums.indexOf(target);
    }
};

//Below call for testing
console.log(searchInsert([1,3,5,6], 2));

//expected output = index of 2 in [1, 2, 3, 4, 6]