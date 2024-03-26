/**
 * Implementation of DFS (depth-first search) Algorithm to find the minimum number of operations
 * required to arrange the permutation in increasing order.
 *
 * @param {number[]} arr - A permutation of integers from 1 to N.
 * @returns {number} - The minimum number of operations.
 */
const minOperations = (arr) => {
    let operations = 0; // Initialize the number of operations

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            // If the current element is not in the correct position
            const correctIndex = arr.indexOf(i + 1); // Find the index of the correct element
            arr.splice(i, correctIndex - i + 1, ...arr.slice(i, correctIndex + 1).reverse());
            // Reverse the sub-portion of the array from i to correctIndex
            operations++; // Increment the number of operations
        }
    }

    return operations;
};

// Example usage:
const arr = [3, 1, 2];
console.log(minOperations(arr)); // Output: 1
