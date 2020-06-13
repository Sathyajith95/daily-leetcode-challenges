//Link to challenge: - https://leetcode.com/problems/same-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null){
        
        return true;
    }
    else if((p === null && q !== null) || (p !== null && q === null)){
        return false;
    }

    if(p.left === null && p.right === null && q.left === null && q.right === null){
        if(p.val === q.val){
            return true;
            console.log(p.val, q.val);
        }
        else{
            return false;
        }
    }
    else{
        if(p.val === q.val){
            return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
        }
        else{
            return false;
        }
    }
};

//Below call for testing
console.log(isSameTree([1,2], [1,null,2]));

//expected output = true