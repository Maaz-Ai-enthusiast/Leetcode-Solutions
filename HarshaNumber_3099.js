var sumOfTheDigitsOfHarshadNumber = function (x) {
    let str = toString(x);
    let arr = [...str]
    let sum = 0;
    for (const n of arr) {
        sum += parseInt(n);
    }
    if (x % sum === 0) {
        return sum;
    }
    else {
        return -1;
    }

};
console.log(sumOfTheDigitsOfHarshadNumber(18));