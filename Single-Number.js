//Link to Challenge: - https://leetcode.com/problems/single-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while(nums.length){
        var temp = nums.shift();
        if(nums.indexOf(temp) < 0){
            return temp;
        }else{
            nums.splice(nums.indexOf(temp),1);
        }
    }
    return 0;
};

//Below call for testing
console.log(singleNumber([4,1,2,1,2]));

//expected output = 4 because prest ony once.