function reverseString (str) {

    // for (i = 0; i < str.length/2; i++) {
    //     let letter = str[i]
    //     str[i] = str[str.length - i - 1]
    //     str[str.length - i - 1] = letter
    // }

    // return str
    return str.split("").reverse().join("")
}

module.exports = {
    reverseString
}