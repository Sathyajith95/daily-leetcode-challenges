//Link to challenge: - https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    var sum = Math.max.apply(null, nums);
    // console.log(sum);
    // console.log(nums);
    for(let i = 0;i<nums.length-1;i++){
        for(let j = i+1;j<=nums.length;j++){
            let listSum = sumList(nums.slice(i,j));
            if(sum < listSum){
                sum = listSum;
            }
        }
    }
    // console.log("Final" + sum);
    return sum;
};
    
var sumList = function(arr){
    let sum = 0;
    for(a of arr){
        sum+=a;
    }
    // console.log("Function:" + sum);
    return sum;
}

//Below call for testing
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//expected output = Sum of [4, -1, 2 , 1] i.e 6