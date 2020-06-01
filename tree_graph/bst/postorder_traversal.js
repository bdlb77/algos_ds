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
const postOrder = node => {
  if (!node) return;

  if (node.left) postOrder(node.left);
  if (node.right) postOrder(node.right);
  arr.push(node.val)
};

postOrder(root);

console.log(arr)
// here we can use 2 stacks.. 1 to push nodes are we recurse through... (left, right first)
// and we pop curr node and place in stack 2.. (will add them as reverse.)

// 1. add root to stack1 1[root]
// 2. pop root from stack 1 1[]
// 3. push root to stack 2 2[root]
// 4. add left to stack. THEN add right to stack. 1[lC, rC]
// 4. iterate.. take left and place in  stack2. push left and right to stack1 2[root, lC] 1[rC]
// 4. iterate.. take right and place in stack 2. 2[root, lC, rC] 1[]
// 5. Pop last and push to resArr. 2[root, lc] results[rC]
// 6. 2[root] results[rC, lC]... 2[] results[rC,lC, root]


const postOrderIterative = root => {
  if (!root) return [];
  const stack1 = [];
  const stack2 = [];
  const res = [];
  stack1.push(root)
  while (stack1.length) {
    let curr = stack1.pop();
    stack2.push(curr);

    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
  }

  while (stack2.length) {
    const node = stack.pop();
    res.push(node.val);
  }
  return res;
}

const res = postOrderIterative(root);
console.log({res})