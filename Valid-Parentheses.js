//Link to challenge: - https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openBrackets = ['[', '{', '('];
    let closeBrackets = [']', '}', ')'];
    let obj = {
        ']':'[',
        '}':'{',
        ')':'('
    }
    
    let queue = [];
    let i = 0;
    // console.log(s.length);
    while(i < s.length){
        if(openBrackets.includes(s.charAt(i))){
            queue.unshift(s.charAt(i++));
        }
        else if(closeBrackets.includes(s.charAt(i)) && queue.length!=0){
            if(queue[0] === obj[s.charAt(i)]){
                queue.shift();
            }
            else{
                return false;
            }
            i++;
        }
        else{
            return false;
        }
    }
    return queue.length>0? false : true;
};


//Below call for testing
console.log(isValid("()[]{}"));

//expected output = true

console.log(isValid("(})"));

//expected output = false