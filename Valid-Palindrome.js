//Link to the challenge: -

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        
    if(s===""){
        return true;
    }else{
        var s1 = s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        s1 = s.split('').reverse().join('');

        return s === s1 ? true : false;
    }
};

//Below call for testing
console.log(isPalindrome("A man, a plan, a canal: Panama"));

//expected output = true

//Below call for testing
console.log(isPalindrome("race a car"));

//expected output = false