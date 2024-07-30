var arrayStringsAreEqual = function(word1, word2) {
    // Join the elements of the first array into a single string
    // Remove all whitespace characters from the resulting string
    const str1 = word1.join('').replace(/\s+/g, '');

    // Join the elements of the second array into a single string
    // Remove all whitespace characters from the resulting string
    const str2 = word2.join('').replace(/\s+/g, '');

    // Compare the cleaned strings for equality
    // Return true if they are equal, otherwise return false
    return str1 === str2;
};
