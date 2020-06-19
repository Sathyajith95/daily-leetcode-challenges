//Link to challenge: - https://leetcode.com/problems/climbing-stairs/


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [1,2,3];
    for(var i = 3;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};

//Below call for testing
console.log(climbStairs(3));

//expected output = 3

//Below call for testing
console.log(climbStairs(4));

//expected output = 5