function canBeEqual(target, arr) {
    // Sort both arrays
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    
    // Compare the sorted arrays
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }
    
    return true;
}