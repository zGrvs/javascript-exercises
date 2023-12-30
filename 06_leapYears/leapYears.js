const leapYears = function(year) {
    if (year < 0 || !(Number.isInteger(year))) {
        return "ERROR";
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
