function minSwaps(nums) {
    const n = nums.length;
    const k = nums.reduce((sum, num) => sum + num, 0);
    
    if (k === 0 || k === n) return 0; // If no 1's or all 1's, no swaps needed
    
    // Initialize the number of zeroes in the first window of size k
    let currentZeroes = 0;
    for (let i = 0; i < k; i++) {
        if (nums[i] === 0) currentZeroes++;
    }
    
    let minSwaps = currentZeroes;
    
    // Sliding the window across the circular array
    for (let i = 1; i < n; i++) {
        // Remove the effect of the element going out of the window
        if (nums[i - 1] === 0) currentZeroes--;
        
        // Add the effect of the new element coming into the window
        if (nums[(i + k - 1) % n] === 0) currentZeroes++;
        
        minSwaps = Math.min(minSwaps, currentZeroes);
    }
    
    return minSwaps;
}
