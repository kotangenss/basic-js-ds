const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  node = new Node();

  root() {
    return this.node.data === undefined ? null : this.node;
  }

  add(data) {
    if (this.node.data === undefined) {
      this.node.data = data;
    } else {
      let isEnd = false;
      let lastNode = this.node;

      while (!isEnd) {
        if (data < lastNode.data) {
          if (lastNode.left === null) {
            lastNode.left = new Node(data);
            isEnd = true;
          } else {
            lastNode = lastNode.left;
          }
        } else {
          if (lastNode.right === null) {
            lastNode.right = new Node(data);
            isEnd = true;
          } else {
            lastNode = lastNode.right;
          }
        }
      }
    }
  }

  has(data) {
    if (this.node.data === undefined) {
      return false;
    } else {
      let lastNode = this.node;

      while (true) {
        if (data < lastNode.data) {
          if (lastNode.left === null) {
            return false;
          } else {
            lastNode = lastNode.left;
          }
        } else if (data > lastNode.data) {
          if (lastNode.right === null) {
            return false;
          } else {
            lastNode = lastNode.right;
          }
        } else {
          return true;
        }
      }
    }
  }

  find(data) {
    if (this.node.data === undefined) {
      return null;
    } else {
      let lastNode = this.node;

      while (true) {
        if (data < lastNode.data) {
          if (lastNode.left === null) {
            return null;
          } else {
            lastNode = lastNode.left;
          }
        } else if (data > lastNode.data) {
          if (lastNode.right === null) {
            return null;
          } else {
            lastNode = lastNode.right;
          }
        } else {
          return lastNode;
        }
      }
    }
  }

  remove(data) {
    if (this.node.data === undefined) {
      return null;
    } else {
      let prevNode = null;
      let lastNode = this.node;
      let isEnd = false;

      while (!isEnd || lastNode === null) {
        if (data < lastNode.data) {
          prevNode = lastNode;
          lastNode = lastNode.left;
        } else if (data > lastNode.data) {
          prevNode = lastNode;
          lastNode = lastNode.right;
        } else {
          isEnd = true;
        }
      }

      if (lastNode != null) {
        if (lastNode.left === null && lastNode.right === null) {
          if (prevNode.data < lastNode.data) {
            prevNode.right = null;
          } else {
            prevNode.left = null;
          }
        } else if (lastNode.left != null && lastNode.right === null) {
          if (prevNode.data < lastNode.data) {
            prevNode.right = lastNode.left;
          } else {
            prevNode.left = lastNode.left;
          }
        } else if (lastNode.left === null && lastNode.right != null) {
          if (prevNode.data < lastNode.data) {
            prevNode.right = lastNode.right;
          } else {
            prevNode.left = lastNode.right;
          }
        } else {
          let minNode = null;
          let prevMinNode = lastNode.right;

          while (minNode === null) {
            if (prevMinNode.left === null) {
              prevMinNode.left = lastNode.left;

              if (prevNode != null) {
                if (prevNode.data < prevMinNode.data) {
                  prevNode.right = prevMinNode;
                } else {
                  prevNode.left = prevMinNode;
                }
              } else {
                this.node = prevMinNode;
              }

              minNode = prevMinNode;
            } else if (prevMinNode.left != null && prevMinNode.left.left == null) {
              minNode = prevMinNode.left;
              prevMinNode.left = null;
              minNode.left = lastNode.left;

              let maxNode = minNode;
              isEnd = false;

              while (!isEnd) {
                if (maxNode.right != null) {
                  maxNode = maxNode.right;
                } else {
                  maxNode.right = prevMinNode;
                  isEnd = true;
                }
              }
              if (prevNode != null) {
                if (prevNode.data < minNode.data) {
                  prevNode.right = minNode;
                } else {
                  prevNode.left = minNode;
                }
              } else {
                this.node = minNode;
              }
            } else {
              prevMinNode = prevMinNode.left
            }
          }
        }
      }
    }
  }

  min() {
    if (this.node.data === undefined) {
      return null;
    } else {
      let lastNode = this.node;

      while (true) {
        if (lastNode.left === null) {
          return lastNode.data;
        } else {
          lastNode = lastNode.left;
        }
      }
    }
  }

  max() {
    if (this.node.data === undefined) {
      return null;
    } else {
      let lastNode = this.node;

      while (true) {
        if (lastNode.right === null) {
          return lastNode.data;
        } else {
          lastNode = lastNode.right;
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};