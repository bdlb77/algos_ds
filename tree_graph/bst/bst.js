class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // add new node in bst.
    if (data < this.data && this.left) {
      this.left.insert(data);
      
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) return this;

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }
    return null;
  }
}


const n1 = new Node(10);
const root = n1
root.insert(5);
root.insert(15);
root.insert(25);
root.insert(13);
root.insert(7);
root.insert(3);
root.insert(44);

console.log(root.contains(100));

module.exports = { Node };