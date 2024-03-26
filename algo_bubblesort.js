function bubblesort(arr) {

    for(let i=0; i < arr.length ; i++) {
        for (let j=1; j < arr.length-i ; j++) {
            //swap
            if (arr[j-1] > arr[j] ) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
            console.log(arr);
        }
    }
    return arr;
}


console.log(bubblesort([8,3,0,7,1,2,6]));