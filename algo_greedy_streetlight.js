/*
We have a street of length n, and we wish to light up the entire street (from 0 to n) 
with streetlights. We have streetlights at locations along the street, and for each streetlight
we know it's position on the street and how far the light can shine to the left and to the right. 
 
Find the minimum number of streetlights needed to light up the whole street.

For example, if n = 10, and streetlights = [[0, 5], [1, 3], [5, 4], [8, 3]], 
the answer is 2, since all we need are streetlights[0] and streetlights[3] 
to light up the entire street from 0 to 10. 

Another example is n = 8, streetlights = [[2, 3], [8, 2]], this would return -1 
since the first streetlight lights up [0, 5] and the second lights up [6,8], and 
there's a gap between 5-6 that isn't lit.

const n1 = 10;
const streetlights1 = [[0, 5], [1, 3], [5, 4], [8, 3]];
console.log(minStreetlights(n1, streetlights1)); // Output: 2

const n2 = 8;
const streetlights2 = [[2, 3], [8, 2]];
console.log(minStreetlights(n2, streetlights2)); // Output: -1

const n3 = 12;
const streetlights3 = [[0,3],[1,3],[2,4],[3,5],[5,7]];
console.log(minStreetlights(n3, streetlights3)); // Output: -3
*/
function minStreetlights1(n, streetlights) {
    let slchg = streetlights.map((a) => [a[0]-a[1], a[0]+a[1]]);
    console.log(slchg);

    let leftArr = [];
    for(a of slchg){
        if (a[0] <= 0) {
            leftArr.push(a);
        } 
    }

    let rightArr = [];
    for (a of slchg) {
        if (a[1] >= n) {
            rightArr.push(a);
        }
    }

    for (a of leftArr) {
        for (b of rightArr) {
            if (a[1] > b[0]) {
                
            }
        }
    }

}

function minStreetlights2(n, streetlights) {
    // Sort streetlights by position
    streetlights.sort((a, b) => a[0] - b[0]);

    // Create adjusted light intervals
    const light_interval = [];
    for (const [l, bright] of streetlights) {
        let left = Math.max(0, l - bright);
        let right = Math.min(n, l + bright);
        light_interval.push([left, right]);
    }

    // Initialize DP array
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    // Dynamic programming
    for (const [l, r] of light_interval) {
        for (let i = l; i <= r; i++) {
            dp[i] = Math.min(dp[i], dp[l] + 1);
        }
    }

    // Check if entire street is covered
    return dp[n] !== Infinity ? dp[n] : -1;
}

function minStreetlights(n, streetlights) {
    // Sort the streetlights by their leftmost position.
    streetlights.sort((a, b) => a[0] - b[0]);

    // Initialize the minimum number of streetlights needed.
    let minStreetlights = 0;

    // Keep track of the rightmost position that is currently lit.
    let rightmostLit = 0;

    // Iterate over the streetlights.
    for (let streetlight of streetlights) {
        // If the rightmost position that is currently lit is less than the leftmost position of the current streetlight, then we need to add a new streetlight.
        if (rightmostLit < streetlight[0]) {
            minStreetlights++;
        }

        // Update the rightmost position that is currently lit.
        rightmostLit = Math.max(rightmostLit, streetlight[0] + streetlight[1]);
    }

    // If the rightmost position that is currently lit is less than the length of the street, then we need to add a new streetlight.
    if (rightmostLit < n) {
        minStreetlights++;
    }

    // Return the minimum number of streetlights needed.
    return minStreetlights;
}

// Example usage:

const n = 10;
const streetlights = [[0, 5], [1, 3], [5, 4], [8, 3]];

const result = minStreetlights(n, streetlights);

console.log(result); // Output: 2

// Example usage
const n1 = 10;
const streetlights1 = [[0, 5], [1, 3], [5, 4], [8, 3]];
console.log(minStreetlights(n1, streetlights1)); // Output: 2

const n2 = 8;
const streetlights2 = [[2, 3], [8, 2]];
console.log(minStreetlights(n2, streetlights2)); // Output: -1

const n3 = 12;
const streetlights3 = [[0,3],[1,3],[2,4],[3,5],[5,7]];
console.log(minStreetlights(n3, streetlights3)); // Output: -3
