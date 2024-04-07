function backtrack(arr, path = [], result = []) {
    // Base case: If pathorary array is same length as input array,
    // we've formed a permutation
    //console.log(arr, '...', path, '...', result);
    if (path.length === arr.length) {
        result.push([...path]);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        // If element is already in the pathorary array, skip it
        if (path.includes(arr[i])) continue;
        
        // Add the current element to the pathorary array
        path.push(arr[i]);
        console.log(i, 'path1...'+path);
        // Recursively call backtrack with the updated pathorary array
        backtrack(arr, path, result);
        // Backtrack: remove the last element to explore other possibilities
        path.pop();
        console.log(i, 'path1...'+path);

        //console.log(i,'path2...'+path);
    }
}

// Example usage:
const inputArray = [1, 2, 3];
const result = [];
backtrack(inputArray, [], result);
console.log(result); // Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]


// function backtrack(nums, path, res) {
//     // Base case: If all numbers are used, add the permutation to the result
//     if (nums.length === 0) {
//         res.push([...path]);
//         return;
//     }

//     // Recursive exploration: Try each candidate number
//     for (let i = 0; i < nums.length; i++) {
//         // Make a decision: Choose a candidate number
//         const num = nums[i];
//         path.push(num);
//         nums.splice(i, 1); // Remove the chosen number from the remaining numbers
//         backtrack(nums, path, res);
//         // Backtrack: Restore the state for the next iteration
//         path.pop();
//         nums.splice(i, 0, num); // Put the removed number back to its original position
//     }
// }

// function permute(nums) {
//     const res = []; // To store the result permutations
//     backtrack(nums, [], res);
//     return res;
// }

// // Example usage:
// const nums = [1, 2, 3];
// console.debug(permute(nums)); 
// // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
