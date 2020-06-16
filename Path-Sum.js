//Link to challenge: - https://leetcode.com/problems/path-sum/


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
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(!root.left && !root.right) return sum - root.val == 0;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};


//Below call for testing
console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));

//expected output = true