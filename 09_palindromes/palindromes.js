const palindromes = function (str) {
    tmp = str = str.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~'"" "]/g, "").toLowerCase();
    tmp = tmp.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== tmp[(str.length - i) - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
