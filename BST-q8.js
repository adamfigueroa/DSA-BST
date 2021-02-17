// Question 8 Balanced BST

// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

const badBST = {
  key: 5,
  value: 5,
  left: {
    key: 2,
    value: 2,
    left: {
      key: 1,
      value: 1,
      left: { key: 2, value: 2, left: null, right: null },
      right: null,
    },
    right: { key: 3, value: 3, left: null, right: null },
  },
  right: {
    key: 9,
    value: 9,
    left: { key: 7, value: 7, left: null, right: null },
    right: { key: 11, value: 11, left: null, right: null },
  },
};

const balancedBST = {
  key: 5,
  value: 5,
  left: {
    key: 2,
    value: 2,
    left: { key: 1, value: 1, left: null, right: null },
    right: { key: 3, value: 3, left: null, right: null },
  },
  right: {
    key: 9,
    value: 9,
    left: { key: 7, value: 7, left: null, right: null },
    right: { key: 11, value: 11, left: null, right: null },
  },
};

function balancedBst(tree) {
  let leftPtr = 0;
  let rightPtr = 0;
  let pos = tree;

  while (pos.left !== null) {
    pos = pos.left;
    leftPtr++;
  }

  pos = tree;
  while (pos.right !== null) {
    pos = pos.right;
    rightPtr++;
  }
  return rightPtr - leftPtr < 1 && leftPtr - rightPtr < 1;
}
console.log(balancedBst(balancedBST));
console.log(balancedBst(badBST));
