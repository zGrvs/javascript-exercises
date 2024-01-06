const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num < 0) return "OOPS";
    
    let fib = [1, 1];
    for (let i = 1; i <= num; i++) {
        fib.push(fib[i - 1] + fib[i]);
    }
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;