function romanNumeral(roman) {
    const replaceOptions = {
        "IV": '4,',
        "IX": '9,',
        "XL": '40,',
        "XC": '90,',
        "CD": '400,',
        "CM": '900,',
        "I": '1,',
        "V": '5,',
        "X": '10,',
        "L": '50,',
        "C": '100,',
        "D": '500,',
        "M": '1000,'
    }
    const reg = new RegExp(Object.keys(replaceOptions).join("|"),"g");
    const reducer = (accum, value) => accum + value
    return roman.replace(reg, function(matched) {
        return replaceOptions[matched]
    }).split(',').map(num => parseInt(num)).filter(num => !isNaN(num)).reduce(reducer)
}


module.exports =  {
    romanNumeral
}