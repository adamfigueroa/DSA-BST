// Question 6 Is it a BST?

// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

const BinarySearchTree = require('./BST-class');

const test = new BinarySearchTree();
test.insert(3, 3);
test.insert(1, 1);
test.insert(4, 4);
test.insert(6, 6);
test.insert(9, 9);
test.insert(2, 2);
test.insert(5, 5);
test.insert(7, 7);

const badBST = {
    key: 3,
    value: 3,
    parent: null,
    left: {
      key: 4,
      value: 4,
      left: null,
      right: {
        key: 2,
        value: 2,
        left: null,
        right: null
      }
    },
    right: {
      key: 4,
      value: 4,
      left: null,
      right: {
        key: 6,
        value: 6,
        left: null,
        right: null
      }
    }
  }

function isItBst(tree) {
  if (tree.left) {
    if (tree.left.value > tree.value) {
      return false;
    } else return isItBst(tree.left);
  }
  if (tree.right) {
    if (tree.right.value < tree.value) {
      return false;
    } else return isItBst(tree.right);
  }

  return true;
}

console.log(isItBst(badBST));
