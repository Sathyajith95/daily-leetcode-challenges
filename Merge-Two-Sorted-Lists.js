//Link to challenge:- https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var tempArr = [];
  while (l1 != null) {
    tempArr.push(l1.val);
    l1 = l1.next;
  }
  while (l2 != null) {
    tempArr.push(l2.val);
    l2 = l2.next;
  }
  tempArr.sort(function (a, b) {
    return a - b;
  });

  if (tempArr.length != 0) {
    var l3 = new ListNode(tempArr.shift());
    for (x of tempArr) {
      var temp = l3;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new ListNode(x);
    }
    return l3;
  } else {
    return l1;
  }
};

//Below call for testing
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

//expected output = [1,1,2,3,4,4]
