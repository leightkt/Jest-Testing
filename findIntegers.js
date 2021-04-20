function findIntegers (array) {
    let even = false
    if ( array[0] % 2 === 0 ) {
        if ( array[1] % 2 === 0 || array[2] === [0] ) {
            even = true
        }
    }

    if (even) {
        return array.find(num => num % 2 !== 0)
    } else {
        return array.find(num => num % 2 === 0)
    }
}

module.exports = {
    findIntegers
}