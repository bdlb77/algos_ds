class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
root.left = new Node(11);
root.right = new Node(15);
root.left.left = new Node(5);
root.right.right = new Node(20);

const arr = [];
const preOrderRecursive = node => {
  if (!node) return;

  arr.push(node.val);
  if (node.left) preOrderRecursive(node.left);
  if (node.right) preOrderRecursive(node.right);
}
preOrderRecursive(root)
console.log({arr})

// prints out arr of node vals in preorder.
const preOrderIterative = root => {
  if (!root) return [];
  const resArr = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    let curr = stack.pop();
    resArr.push(curr.val);
    
    if (curr.right) stack.push(curr.right);
    if(curr.left) stack.push(curr.left);
  }
  return resArr;
}

const res = preOrderIterative(root);
console.log({res})