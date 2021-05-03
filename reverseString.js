function reverseString (string) {
    string = string.toLowerCase()

    for (i = 0; i < string.length / 2; i++) {
        let letter = string[i]
        string[i] = string[string.length - i - 1]
        string[string.length - i - 1] = letter
    }

    return string
}

module.exports = {
    reverseString
}