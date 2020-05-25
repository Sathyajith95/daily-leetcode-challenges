//Link to challenge: - https://leetcode.com/problems/reverse-integer/

// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function(x) {
    var maxInteger = Math.pow(2, 31) - 1;
    const rev = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
    return (rev > maxInteger || rev < -maxInteger)? 0: rev;
};

//below call with parameters for testing
console.log(reverse(-123));

//expected output = -321