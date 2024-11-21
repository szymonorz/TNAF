function isHappyNumber(x) {
    let sum = 0;
    let r = x
    while(sum != x){
        sum = 0
        while(r>0) {
            let c = r % 10;
            sum = sum + (c*c)
            r = Math.floor(r/10)
        }
        r = sum
        if(r===1) return true
    }

    return false
}

console.log(isHappyNumber(19))
console.log(isHappyNumber(4))