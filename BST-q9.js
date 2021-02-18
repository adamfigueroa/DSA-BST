// Question 9 Are they the same BSTs?

// You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.

const test1 = [3, 5, 4, 6, 1, 0, 2];
const test2 = [3, 1, 5, 2, 4, 6, 0];

const test3 = [1, 9, 5, 2, 4, 6, 0];
const test4 = [1, 7, 5, 2, 3, 6, 0];

function sameBst(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
    return false;
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  const root = arr1[0];
  arr1.splice(0, 1);
  arr2.splice(0, 1);

  let rightNode1 = [];
  let leftNode1 = [];

  arr1.forEach((node) => {
    node > root ? rightNode1.push(node) : leftNode1.push(node);
  });

  let rightNode2 = [];
  let leftNode2 = [];

  arr2.forEach((node) => {
    node > root ? rightNode2.push(node) : leftNode2.push(node);
  });

  return sameBst(rightNode1, rightNode2) && sameBst(leftNode1, leftNode2);
}
console.log(sameBst(test1, test2), 'true');
console.log(sameBst(test3, test4), 'false');
