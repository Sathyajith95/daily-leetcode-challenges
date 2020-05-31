//Link to challenge: - https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) {
        return 0;
    }
    
   return haystack.indexOf(needle)>=0 ? haystack.indexOf(needle) : -1;
};

//Below call for testing
console.log(strStr("hello", "ll"));

//expected output = index of 'll' in 'hello' i.e 2