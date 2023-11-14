/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/missing-number/description/
 */
 var missingNumber = function(nums) {
    let i = 0;
    let n = nums.length;
    
    while(i < n) {
        let correctedIndex = nums[i];
        if (correctedIndex < n && correctedIndex != i) {
            let temp = nums[correctedIndex];
            nums[correctedIndex] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }

    for(let i=0; i<nums.length;i++) {
        if (i != nums[i]) {
            return i;
        }
    }

    return n;

};