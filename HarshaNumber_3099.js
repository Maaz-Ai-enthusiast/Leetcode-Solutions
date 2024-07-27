var sumOfTheDigitsOfHarshadNumber = function(x) {
    let str = x.toString(); 
    let arr = [...str];
    let sum = 0;
    for (const n of arr) {
        sum += parseInt(n);
    }
    if (x % sum === 0) {
        return sum;
    } else {
        return -1;
    }
};
