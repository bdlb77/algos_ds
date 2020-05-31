class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const queue = new Queue();
		queue.enqueue(this.root);

		while (!queue.isEmpty()) {
			let el = queue.dequeue();
      fn(el);
      // queue.enqueue(...el.children)
			for (let child of el.children) {
				queue.enqueue(child);
			}
		}
  }
  
  traverseDF(fn) {
    const arr = [];
    arr.push(this.root);

    while (arr.length) {
      const el = arr.shift();
      fn(el);
      arr.unshift(...el.children);
    }
  }
}

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	insert(data) {
		this.children.push(new Data(data));
	}

	remove(data) {
		this.children = this.children.filter((node) => node.data !== data);
	}
}

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.push(item);
	}

	dequeue() {
		if (this.isEmpty()) {
			return "Underflow";
		} else {
			return this.items.shift();
		}
	}

	front() {
		if (this.isEmpty()) {
			return "No items in Queue";
		}

		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}
}

const tree = new Tree();
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(13);
const node4 = new Node(5);
const node5 = new Node(99);
node1.children.push(node2, node3, node5);
node2.children.push(node4)
tree.root = node1;

let arr = [];
// tree.traverseBF((node) => {
//   node.data += 10
//   arr.push(node.data);
// })
tree.traverseDF((node) => {
  node.data += 10
  arr.push(node.data);
})

console.log(arr)
