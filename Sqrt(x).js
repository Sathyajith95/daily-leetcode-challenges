//Link to problem: - https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.floor(Math.sqrt(x));
    
    var i = res = 1;
    while(res <= x){
        i++;
        res = i * i;
    }
    return i - 1;
};

//Below call for testing
console.log(mySqrt(9));

//expected output = 3

//Below call for testing
console.log(mySqrt(8));

//expected output = 2