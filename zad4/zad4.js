function suma(arr) {
    let sum = 0
    arr.forEach(i => sum +=i)
    return sum;
}


console.log(suma([1,2,3]))
console.log(suma([1,2]))