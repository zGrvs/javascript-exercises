const repeatString = function(string, num) {
    if (num === 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    }

    let repeat = string;
    for (let i = 0; i < num - 1; i++) {
        repeat += string;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
