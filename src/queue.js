const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  listNode = new ListNode();

  getUnderlyingList() {
    return this.listNode;
  }

  enqueue(value) {
    let lastNode = this.listNode;

    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }

    if (lastNode.value === undefined) {
      lastNode.value = value;
    } else {
      lastNode.next = new ListNode(value);
    }
  }

  dequeue() {
    let value = this.listNode.value;
    this.listNode = this.listNode.next;
    return value;
  }
}

module.exports = {
  Queue
};
