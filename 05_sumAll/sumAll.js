const sumAll = function(num1, num2) {
    let sum = 0;
    if (num2 < num1) {
        const buffer = num1;
        num1 = num2;
        num2 = buffer;
    } else if (num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }

    for (let i = num1; i <= num2; i++) {
        sum += i;
        num1 = i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
