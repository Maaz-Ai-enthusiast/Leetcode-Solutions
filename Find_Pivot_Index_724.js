var pivotIndex = function (nums) {
    // Initialize leftSum to 0. This will keep track of the sum of elements to the left of the current index.
    let leftSum = 0;
    
    // Calculate the total sum of the array elements.
    const totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Iterate through the array to find the pivot index.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the rightSum as totalSum minus leftSum and the value at the current index (nums[i]).
        let rightSum = totalSum - leftSum - nums[i];
        
        // Check if leftSum equals rightSum. If true, we found the pivot index.
        if (rightSum === leftSum) {
            return i; // Return the current index as the pivot index.
        }
        else {
            // Update leftSum by adding the value at the current index (nums[i]).
            leftSum += nums[i];
        }
    }

    // If no pivot index is found, return -1.
    return -1;
};
