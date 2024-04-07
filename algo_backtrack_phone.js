const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

function letterCombinations(digits) {
    if (!digits) return [];

    const result = [];

    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination);
        } else {
            const digit = nextDigits.substring(0, 1);
            const letters = digitToLetters[digit];

            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i];
                backtrack(combination + letter, nextDigits.substring(1));
            }
        }
    }

    backtrack('', digits);
    return result;
}

// Example usage:
console.log(letterCombinations('2')); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
