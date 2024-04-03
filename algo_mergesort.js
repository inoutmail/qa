function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array of length 1 or empty is already sorted
    }
    
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);
    return merge(leftSort,rightSort);
}

function merge(left,right) {
    let result = [], leftPointer = 0, rightPointer = 0;

    while(leftPointer < left.length && rightPointer < right.length) {
        //compare leftpointer with right, whichver is less push to result
        if (left[leftPointer] < right[rightPointer]) {
            result.push(left[leftPointer]);
            leftPointer++;
        } else {
            result.push(right[rightPointer]);
            rightPointer++;
        }
    }

    while(leftPointer < left.length) {
        result.push(left[leftPointer]);
        leftPointer++;
    }

    while(rightPointer < right.length) {
        result.push(right[rightPointer]);
        rightPointer++;
    }
    
    return result;
}

console.log(mergeSort([8,3,0,7,1,2,6]));