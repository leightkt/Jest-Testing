function extractURL(url) {
    return url.split(/[.\/]/).filter(string => {
            return string !== '' && !string.includes('http') && string !== "www"
        })[0]
}

module.exports = { extractURL }