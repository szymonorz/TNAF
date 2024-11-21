function palindrom(str) {
    const length = str.length
    for(let i=0; i<str.length/2 ; i++) {
        if(str.at(i) != str.at(str.length - i - 1)) {
            return false
        }
    }

    return true
}

console.log(palindrom("kajak"))
console.log(palindrom("abcd"))