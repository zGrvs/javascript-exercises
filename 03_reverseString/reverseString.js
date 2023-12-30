const reverseString = function(string) {
    let reversed = "";
    for (i = 1; i < string.length + 1; i++) {
        reversed += string[string.length - i]
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;


/* actual solution is much easier; type it out for memory..

const reverseString = function(string) {
    return string.split("").reverse().join("")
}

*/