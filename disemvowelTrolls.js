function disemvowelTrolls (str) {
    const regex = /a|e|i|o|u/g
    return str.replace(regex, '')
}

module.exports = {
    disemvowelTrolls
}