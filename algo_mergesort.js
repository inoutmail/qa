function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array of length 1 or empty is already sorted
    }
    
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    merge(left,right);
}

function merge(left,right) {
    let result = [], leftPoint = 0, rightPoint = 0;
    
}


console.log(mergeSort([8,3,0,7,1,2,6]));