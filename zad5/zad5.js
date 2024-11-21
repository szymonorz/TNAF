function fibonnaci(n) {
    let n0 = 1;
    let n1 = 1;
    let result = 0;
    for(let i=2; i<n; i++) {
        result = n1 + n0;
        n0 = n1;
        n1 = result;
    }

    return result
}

console.log(fibonnaci(9))
console.log(fibonnaci(100))