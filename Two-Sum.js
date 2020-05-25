// Link to the challenge: - https://leetcode.com/problems/two-sum/

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var twoSum = function(nums, target) {
    var indices = [];
    for(var i = 0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }
};

//Below call for testing
console.log(twoSum([2, 7, 11, 15], 9));

//expected output = [0,1]