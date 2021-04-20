function mumble (string) {
    const letterArray =  string.split('').map(letter => letter.toUpperCase())
    for (i = 0; i < letterArray.length; i++) {
        letterArray[i] = letterArray[i] + letterArray[i].toLowerCase().repeat(i)
    }
    return letterArray.join('-')
}


module.exports = {
    mumble
}