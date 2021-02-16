// Question 4 What does this program do?

// Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

const test = {
    value: 2,
    left: null,
    right: null
}
const test2 = {
    value: 2,
    left: {value: 1},
    right: {value: 1}
}

console.log(tree(test2))

// it looks like this is a recursive function that takes in a value and then adds the value + the sum of left values and right values.

// at best this would be a O(1), worst case is O(n)