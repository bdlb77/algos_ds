class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const node = new Node(data, this.head);
		this.head = node;
	}

	size() {
		let count = 0;
		let curr = this.head;
		while (curr) {
			count++;
			curr = curr.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) return null;

		let curr = this.head;
		while (curr) {
			if (!curr.next) return curr;
			curr = curr.next;
		}
	}

	clearList() {
		this.head = null;
	}

	print() {
		if (!this.head) return null;
		let curr = this.head;
		while (curr) {
			console.log(curr.data);
			curr = curr.next;
		}
	}

	removeFirst() {
		if (!this.head) return null;

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return null;

		if (!this.head.next) this.removeFirst();
		let curr = this.head.next;
		let prev = this.head;
		while (curr.next) {
			prev = curr;
			curr = curr.next;
		}

		prev.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			// some last node exists
			last.next = new Node(data);
		} else {
			// list is empty
			this.head = new Node(data);
		}
  }
  
  getAt(index) {
    // if no list.. & if index is out of range.
    let counter = 0;
    let node = this.head;
    // if node is not there it will skip while and return null.
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(idx) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      // if prev || prev.next(node to remove) is out of bounds
      return null;
    }
    prev.next = prev.next.next;
  }

  removeAt(index) {
    if (!this.head) return null;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let node = this.head;
    let prev;
    let counter = 0;

    while (node.next) {
      if (index === counter) {
        prev.next = node.next;
        return;
      }
      counter++
      prev = node;
      node = node.next;
    }
    return null
  }
}

class Node {
	constructor(data = null, next = null) {
		this.data = data;
		this.next = next;
	}
}

const list = new LinkedList();

list.insertFirst(5);
list.insertFirst(4);
list.insertFirst(3);
list.insertFirst(2);
console.log(list.removeAt(0));
