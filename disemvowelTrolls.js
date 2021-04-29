function disemvowelTrolls (str) {
    const regex = /a|e|i|o|u|A|E|I|O|U/g
    return str.replace(regex, '')
}

module.exports = {
    disemvowelTrolls
}