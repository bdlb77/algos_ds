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

let arr = []
function inOrderRecursive(node) {
  if (!node) return;

  if (node.left) inOrderRecursive(node.left);
  arr.push(node.val);
  if (node.right) inOrderRecursive(node.right);
}

inOrderRecursive(root);
console.log({arr})

const inOrderIterative = root => {
  if (!root) return [];
  const stack = [];
  const resArr = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    resArr.push(curr.val);
    curr = curr.right;
  }
  return resArr;
}
const res = inOrderIterative(root);
console.log({res})