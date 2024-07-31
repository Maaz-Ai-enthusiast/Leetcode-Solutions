var maxProduct = function (nums) {
    // Kadane's Algorithm to find the maximum product subarray
    // The test cases are generated so that the answer will fit in a 32-bit integer.
    
    let curPro = 1;
    
    // Number.MIN_SAFE_INTEGER: This is a built-in property of the Number object that
    //  represents the smallest integer value that can be safely used without risking precision loss or unexpected behavior.
    let maxPro = Number.MIN_SAFE_INTEGER;
    
    // Helper function to ensure the value fits in a 32-bit signed integer range
    const ensure32Bit = (value) => {
        if (value > 2147483647) return 2147483647;
        if (value < -2147483648) return -2147483648;
        return value;
    };

    // Forward pass through the array
    for (let i = 0; i < nums.length; i++) {
        // Multiply the current product by the current element
        curPro *= nums[i];
        // Update the maximum product found so far
        maxPro = Math.max(maxPro, curPro);
        // Ensure the value fits in a 32-bit integer range
        maxPro = ensure32Bit(maxPro);
        // If the current product is zero, reset it to 1 (to handle the product subarray case)
        if (curPro === 0) {
            curPro = 1;
        }
    }

    // Reverse pass through the array
    curPro = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // Multiply the current product by the current element
        curPro *= nums[i];
        // Update the maximum product found so far
        maxPro = Math.max(maxPro, curPro);
        // Ensure the value fits in a 32-bit integer range
        maxPro = ensure32Bit(maxPro);
        // If the current product is zero, reset it to 1 (to handle the product subarray case)
        if (curPro === 0) {
            curPro = 1;
        }
    }

    return maxPro;
};