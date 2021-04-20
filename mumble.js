function mumble (string) {
    const letterArray =  string.split('').map(letter => letter.toUpperCase())
    for (i = 0; i < letterArray.length; i++) {
        let times = i
        let string = ''
        for (y = 0; y < times; y++) {
            string = string.concat( returnLetter(letterArray[i]) )
        }
        letterArray[i] = letterArray[i].concat(string)
    }
    return letterArray.join('-')
}

function returnLetter (letter) {
    return letter.toLowerCase()
}

module.exports = {
    mumble
}