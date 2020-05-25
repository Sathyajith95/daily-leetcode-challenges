//Link to the challenge: - https://leetcode.com/problems/palindrome-number/

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    return Number(x.toString().split("").reverse().join("")) === x ? true: false;
};

//below call with parameters for testing
console.log(isPalindrome(121));

//expected output = true