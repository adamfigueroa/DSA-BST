// Question 7 3rd largest node

// Write an algorithm to find the 3rd largest node in a binary search tree.

const BinarySearchTree = require('./BST-class');

const test = new BinarySearchTree();
test.insert(30, 30);
test.insert(10, 10);
test.insert(4, 4);
test.insert(61, 61);
test.insert(97, 97);


function thirdPlaceBronze(tree) {
    tree.remove(tree._findMax().key)
    tree.remove(tree._findMax().key)
    return (tree._findMax().key)
}
console.log(thirdPlaceBronze(test))