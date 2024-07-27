/*

Availability: x.toString() is available on all objects that inherit from Object.prototype.
 toString(x) would only work if you defined a global or local function named toString.

Usage Context: x.toString() is used as a method of an object,
 whereas toString(x) would be a standalone function call, which doesn’t exist in standard JavaScript.

Type Coercion: To convert a value to a string, you can use String(x)
 or x.toString(), but toString(x) will result in a reference error unless you define such a function.

*/ 


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
