function permutation(nums) {
    let result = [];

    function backtrack(arr, path) {
        if (arr.length === path.length) {
            console.log(path);
            result.push(path);
            return;
        }

        for (let i=0; i<arr.length; i++) {
            if (path.includes(arr[i])) continue;
            path.push(arr[i]);
            backtrack(arr,path);
            path.pop();
        }
    };

    backtrack(nums,[]);
    return result;
}

console.log(permutation([1,2,3]));