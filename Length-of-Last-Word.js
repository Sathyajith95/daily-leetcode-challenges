//Link to challenge: - https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(" ");
    arr = arr.filter( ele => ele );
    if(arr.length > 0){
    return (arr[arr.length-1]).length;
    }
    else return 0;
};

//Below call for testing
console.log(lengthOfLastWord("Hello World"));

//expected output = Lenght of 'World' = 5

//Below call for testing
console.log(lengthOfLastWord("Hello "));

//expected output = Lenght of 'Hello' = 5