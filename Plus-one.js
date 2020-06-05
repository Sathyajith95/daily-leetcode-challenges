//Link to challenge: 

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // var num = (digits.join(""));
    // num+=1;
    // return num.toString().split("");
    
    if(digits[digits.length-1] === 9){        
        for(let i = digits.length-1;i>=0;i--){
            digits[i] = 0;
            if(i-1>=0){
                if(digits[i-1] != 9){
                    digits[i-1] += 1;
                    break;
                }
            }
            else{
                digits.unshift(1);
            }
        }
    }
    else{
        digits[digits.length - 1] +=1;
    }
    return digits;
    
};

//Below call for testing
console.log(plusOne([2, 7, 1, 1]));

//expected output = [2, 7, 1, 2]

//Below call for testing
console.log(plusOne([9, 9, 9]));

//expected output = [1, 0, 0, 0]