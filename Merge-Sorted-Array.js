//Link to challenge: - https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(nums2.length){
        nums1[m++] = nums2.shift();
    }
    nums1.sort((a,b) =>  (a-b) );
    return nums1;
};

//Below call for testing
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

//expected output = [1, 2, 2, 3, 5, 6]