//Link to challenge: - https://leetcode.com/problems/symmetric-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    function isMirror(s, t){
        if(!s && !t) return true;
        if(!s || !t || s.val !== t.val) return false;
        
        return (isMirror(s.left, t.right) && isMirror(s.right, t.left))
    }
    
    return (isMirror(root.left, root.right));
};


//Below call for testing
console.log(isSymmetric([1,2,2,3,4,4,3]));

//expected output = true