function dailyTemperatures(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
}

// Example usage:
const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures1)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]

const temperatures2 = [30, 40, 50, 60];
console.log(dailyTemperatures(temperatures2)); // Output: [1, 1, 1, 0]

const temperatures3 = [30, 60, 90];
console.log(dailyTemperatures(temperatures3)); // Output: [1, 1, 0]
