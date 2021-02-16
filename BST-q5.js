// Question 5 Height of a BST

// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

const BinarySearchTree = require('./BST-class')

const test = new BinarySearchTree();
test.insert(3, 3)
test.insert(1, 1)
test.insert(4, 4)
test.insert(6, 6)
test.insert(9, 9)
test.insert(2, 2)
test.insert(5, 5)
test.insert(7, 7)

// console.log(test, {depth: null})


function bstHeightFinder2000(tree) {
  let leftSideHeight = 0;
  let rightSideHeight = 0;

  if (!tree) {
    return 0;
  }

  if (!tree.left && !tree.right) {
    return 1;
  }

  if (tree.left) {
    leftSideHeight = bstHeightFinder2000(tree.left);
  }
  if (tree.right) {
    rightSideHeight = bstHeightFinder2000(tree.right);
  }

  return Math.max(leftSideHeight, rightSideHeight) + 1
}
console.log(bstHeightFinder2000(test))

// the time complexity is O(n)
