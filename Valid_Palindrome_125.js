var isPalindrome = function(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    let cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to its reversed version
    return cleanedString === reversedString;
};