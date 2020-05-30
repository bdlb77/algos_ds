function midpoint(list) {
  if (!list.head) return null;
  let fast = list.head;
  let slow = list.head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
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

console.log(midpoint(list))