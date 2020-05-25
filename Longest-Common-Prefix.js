//Link to challenge:- https://leetcode.com/problems/longest-common-prefix/

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return '';
    }
    var initialPrefix = strs.shift();
    
    for(let i = 0;i<strs.length;i++){
        let temp = strs[i];
        let newPrefix = '';
        if(initialPrefix.charAt(0) === temp.charAt(0)){
            newPrefix = temp.charAt(0);
        
            if(initialPrefix.length<=temp.length){
                for(let j = 1;j<initialPrefix.length;j++){
                    if(initialPrefix.charAt(j) === temp.charAt(j)){
                        newPrefix += temp.charAt(j);
                    }
                }
            }
            else{
                for(let j = 1;j<temp.length;j++){
                    if(initialPrefix.charAt(j) === temp.charAt(j)){
                        newPrefix += temp.charAt(j);
                    }
                }
            }
        }
        initialPrefix = newPrefix;
    }
    return initialPrefix!='' ? initialPrefix : '';
};

//Below calls are for testing
console.log(longestCommonPrefix(["flower","flow","flight"]));

//expected output = "fl"

console.log(longestCommonPrefix(["dog","racecar","car"]));

//expected output = ""

console.log(longestCommonPrefix([]));

//expected output = ""