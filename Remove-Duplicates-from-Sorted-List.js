//Link to challenge: - https://leetcode.com/problems/remove-duplicates-from-sorted-list/


// /**
//  * Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
//  */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var temp = head;
    if(temp === null){
        return temp;
    }
    while(temp.next != null){
        var temp1 = temp.next;
        if(temp1.val === temp.val){
            temp.next = temp1.next;
        }else{
         temp = temp.next;   
        }
        console.log(temp1.val);
        // temp = temp.next;
    }
    return head;
};

//Create list node
var list = new ListNode(1,null);
var node = new ListNode(1,null);
list.next = node;
var temp = new ListNode(2,null);
node.next = temp;

//Below call for testing
console.log(deleteDuplicates(list));

//expected output = [1,2]