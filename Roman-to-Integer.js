//Link to challenge:- https://leetcode.com/problems/roman-to-integer/

// /**
//  * @param {string} s
//  * @return {number}
//  */

var romanToInt = function(s) {
    const romanValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    var arr = [];
    s=s.split("");
    for(i=0;i<s.length;i++){
        arr[i] = romanValue[s[i]];
    }
    var res = 0;
    if(s.length === 1){
         return res+= romanValue[s];
    }
    for(i=0;i<arr.length-1;i++){
        if(arr[i] >= arr[i+1]){
            res+=arr[i];
            if(i == arr.length-2){
                res+=arr[i+1];
            }
        }
        else{
            res+=arr[i+1] - arr[i];
            i++;
            if(i == arr.length-2){
                res+=arr[i+1];
            }
        }
    }
    
    return res;
    
};

//below call with parameters for testing
console.log(romanToInt('XXVIV'));

//expected output = 29