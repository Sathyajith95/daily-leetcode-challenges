//Link to challenge: - https://leetcode.com/problems/min-stack/


/**
 * initialize your data structure here.
 */
class MinStack {
    constructor(){
        this.stackArr = [];
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stackArr.push(x);
    // console.log(this.stackArr);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stackArr.pop();
    // console.log(this.stackArr);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // console.log("Top",this.stackArr[this.stackArr.length-1]);
    return this.stackArr[this.stackArr.length-1];
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // console.log(Math.min(...this.stackArr));
    return Math.min(...this.stackArr);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


//Below call for testing
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2