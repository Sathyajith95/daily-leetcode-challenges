//Link to challenge: - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var index1 = 0;
    while(numbers.length){
        var sum = numbers.shift();
        index1++;
        for(var x of numbers){
            if(sum+x === target){
                return [index1, index1+(numbers.indexOf(x)+1)];
            }
        }
    }
    return [];
};

//Below call for testing
console.log(twoSum([2,7,11,15], 9));

//expected output = [1, 2]