function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1) {
        return 0; // No intervals or only one interval, so no removal needed
    }
    
    // Sort intervals based on their end points
    intervals.sort((a, b) => a[1] - b[1]);
    
    let nonOverlapEnd = intervals[0][1]; // End point of the last non-overlapping interval
    let removals = 0; // Number of intervals to remove
    
    // Iterate through the intervals
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start < nonOverlapEnd) {
            // Overlap found, remove the interval with larger end point
            removals++;
        } else {
            // No overlap, update the end point of the last non-overlapping interval
            nonOverlapEnd = end;
        }
    }
    
    return removals;
}

// Example usage:
const intervals = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(intervals)); // Output: 1
