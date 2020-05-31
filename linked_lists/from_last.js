/* 
  Given a linked list and integer n, return the element n spaces from the last node 
  in the list.  do not call the size() method
  of the linked list. Assume that n will always be less than length of the list.
*/

function fromLast(head, n) {
  let slow = head;
  let fast = head;
  
  // advance fast n elements forward.
  // now when fast hits end of list, slow will be n elements behind.
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(data, next = null){
    this.data =  data;
    this.next = next;
  }
}

const list = new LinkedList();
const node7 = new Node(7);
const node6 = new Node(6, node7);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3)
const node1 = new Node(1, node2);
list.head = node1;

console.log(fromLast(list.head, 2))