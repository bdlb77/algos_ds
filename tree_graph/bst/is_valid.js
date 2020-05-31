
const T = require('./bst.js');
const Node = T.Node;

function isValid(root) {
  let min = Number.NEGATIVE_INFINITY;
  let max = Number.POSITIVE_INFINITY;

  return helper(root, min, max)
}

function helper(node, min, max) {
  if (node.data < min || node.data > max) {
    return false;
  }

  if (node.left) {
    return helper(node.left, min, node.data);
  }
  if (node.right) {
    return helper(node.right, node.data, max);
  }
  
  return true;
}

const n1 = new Node(10);
const root = n1
// root.insert(5);
// root.insert(15);
// root.insert(25);
// root.insert(13);
// root.insert(7);
// root.insert(3);
// root.insert(44);

root.left = new Node(11);
root.left.left = new Node(5);
root.right = new Node(15);
root.right.right = new Node(20);

console.log(isValid(root));