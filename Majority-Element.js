//Link to challenge: - https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majority = nums.length / 2;
    if(nums.length === 1){
        return nums[0];
    }
    while(nums.length){
        var item = nums.shift();
        var count = 1;
        while(nums.indexOf(item) > -1){
            count++;
            if(count > majority) return item;
            else nums.splice(nums.indexOf(item), 1);
        }
    }
};


//Below call for testing - Majority element is which appears more than length of array/2 times
console.log(majorityElement([2,2,1,1,1,2,2]));

//expected output = 2