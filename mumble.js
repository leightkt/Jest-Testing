function mumble (string) {
    const letterArray =  string.split('').map(letter => letter.toUpperCase())
    for (i = 0; i < letterArray.length; i++) {
        if (i > 0) {
            letterArray[i] = letterArray[i].concat( (letterArray[i].toLowerCase()) )
        }
        
    }
    return letterArray
}

module.exports = {
    mumble
}