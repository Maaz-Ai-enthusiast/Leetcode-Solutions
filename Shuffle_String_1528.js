var restoreString = function(s, indices) {
    let shuffleStr = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        shuffleStr[indices[i]] = s[i];
    }
    return shuffleStr.join("");
};
console.log(restoreString( "codeleet",[4,5,6,7,0,2,1,3]));