function range(start, end) {
    return [...Array(end-start+1).keys()].map(i => i+start)
}

console.log(range(1,3))
console.log(range(3, 10))