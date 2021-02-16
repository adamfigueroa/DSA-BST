// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.

// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.

const BinarySearchTree = require('./BST-class');

function main() {
  const intBst = new BinarySearchTree();

  intBst.insert(3, 3);
  intBst.insert(1, 1);
  intBst.insert(4, 4);
  intBst.insert(6, 6);
  intBst.insert(9, 9);
  intBst.insert(2, 2);
  intBst.insert(5, 5);
  intBst.insert(7, 7);

  const stringBst = new BinarySearchTree();

  stringBst.insert('E', 'E')
  stringBst.insert('A', 'A')
  stringBst.insert('S', 'S')
  stringBst.insert('Y', 'Y')
  stringBst.insert('Q', 'Q')
  stringBst.insert('U', 'U')
  stringBst.insert('E', 'E')
  stringBst.insert('S', 'S')
  stringBst.insert('T', 'T')
  stringBst.insert('I', 'I')
  stringBst.insert('O', 'O')
  stringBst.insert('N', 'N')

  console.dir(intBst, {depth: null});
  console.dir(stringBst, {depth: null});
}
main();
