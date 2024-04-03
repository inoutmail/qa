var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        console.log(digits[i]);
        digits[i] = (digits[i] + 1) % 10;
        console.log(digits[i]);
        if (digits[i]) return digits;
    }
    digits.unshift(1);
    return digits;
};
console.log('po', plusOne([9,8]));