// 62. Unique Paths
// Medium
// Topics
// Companies
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

function uniquePaths(m,n) {
    let count = 0;
    let resultPaths = [];

    function backtrack(row,col, path) {

        if (row===m-1 && col===n-1) {
            resultPaths.push(path);
            count++;
        }

        if (row+1 < m) {
            path.push([row+1, col]);
            backtrack(row+1, col, path);
            path.pop();
        }

        if (col+1 < n) {
            path.push([row,col+1]);
            backtrack(row, col+1, path);
            path.pop();
        }
    }

    backtrack(0,0, [[0,0]]);
    return count;
}

















function uniquePaths1(m, n) {
    let count = 0;

    function backtrack(row, col) {
        // Base case: reached the bottom-right corner
        if (row === m - 1 && col === n - 1) {
            count++;
            return;
        }

        // Move down if within bounds
        if (row + 1 < m) {
            backtrack(row + 1, col);
        }

        // Move right if within bounds
        if (col + 1 < n) {
            backtrack(row, col + 1);
        }
    }

    // Start backtracking from the top-left corner
    backtrack(0, 0);

    return count;
}

// Example usage:
const m = 3;
const n = 3;
console.log(uniquePaths(m, n)); // Output: 28
