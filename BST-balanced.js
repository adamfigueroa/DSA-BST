class BinarySearchTree {
    constructor(key=null) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function createBalancedBst(arr) {
    if (!arr.length) {
        return null
    }
    if (arr.length === 1) {
        const node = new BinarySearchTree(arr[0]);
        return node;
    }

    const middleIndex = Math.floor(arr.length / 2)
    const middleValue = arr[middleIndex]

    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex + 1);

    const leftSubtree = createBalancedBst(left)
    const rightSubtree = createBalancedBst(right)

    const node = new BinarySearchTree(middleValue);
    node.left = leftSubtree
    node.right = rightSubtree

    return node;
}

console.dir(createBalancedBst([1,2,3,5,7,9,11]), {depth: null})
console.dir(createBalancedBst([-2,-1,3,5,7,9,11]), {depth: null})
console.dir(createBalancedBst([1,2,3,5,7,7,9,11]), {depth: null})
console.dir(createBalancedBst([1,2,3,5,7,9.5,11]), {depth: null})
console.dir(createBalancedBst([1,2,1E6,1E7,1E8,1E9]), {depth: null})
console.dir(createBalancedBst([]), {depth: null})