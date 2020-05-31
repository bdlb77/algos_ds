
const reverseList = list => {
  if (!list.head) return null;

  let curr = list.head;
  let prev;
  while(curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  
  list.head = prev;
  
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  // generator to loop over nodes in list
  *[Symbol.iterator](){
    let curr = this.head;
    while (curr) {
      yield curr;
      curr = curr.next;
    }
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
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

for (node of list) {
  console.log(node.data);
}

reverseList(list);
console.log("\n\n REVERSE \n\n")
for (node of list){
  console.log(node.data)
}