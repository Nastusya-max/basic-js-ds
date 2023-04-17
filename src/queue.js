const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
//  * const queue = new Queue();
//  *
//  * queue.enqueue(1); // adds the element to the queue
//  * queue.enqueue(3); // adds the element to the queue
//  * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//  * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    this.length++;
    let newNode = new ListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  dequeue() {
    let firstNode = this.head;
    if (this.head.next != null) {
      this.head = this.head.next;
    }

    return firstNode.value;
  }
}

module.exports = {
  Queue,
};
