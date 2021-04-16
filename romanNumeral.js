function romanNumeral(roman) {
    const replaceOptions = {
        "I": '1,',
        "IV": '4,',
        "V": '5,',
        "IX": '9,',
        "X": '10,',
        "XL": '40,',
        "L": '50,',
        "XC": '90,',
        "C": '100,',
        "CD": '400,',
        "D": '500,',
        "CM": '900,',
        "M": '1000,'
    }
    const reg = new RegExp(Object.keys(replaceOptions).join("|"),"gi");
    return roman.replace(reg, function(matched) {
        return replaceOptions[matched]
    })
}


module.exports =  {
    romanNumeral
}