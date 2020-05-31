class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }
}

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];
  while (arr.length > 1) {
    let node = arr.shift();
    // do stuff
    if (node === 's') {
      counters.push(0)
      arr.push('s')
    } else {
      arr.push(...node.children);
      counters[counters.length - 1] += 1;
    }

  }
  return counters;
}


const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(13);
const node4 = new Node(100);
const node5 = new Node(83);
const node6 = new Node(5);
const node7 = new Node(99);
const node8 = new Node(65);
node1.children.push(node2, node3);
node3.children.push(node5)
node2.children.push(node4)
node4.children.push(node6);
node5.children.push(node7, node8)

console.log(levelWidth(node1));