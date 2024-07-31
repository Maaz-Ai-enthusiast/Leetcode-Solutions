function lengthOfLastWord(s) {
    // Trim any trailing spaces
    s = s.trim();

    // Find the position of the last space
    let lastSpaceIndex = s.lastIndexOf(' ');

    // Extract the last word
    let lastWord = s.substring(lastSpaceIndex + 1),length;


    // Return the length of the last word
    return lastWord.length;
}
    // return s.substring(lastSpaceIndex + 1).length;