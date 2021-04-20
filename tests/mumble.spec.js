const mumble = require('../mumble')

describe('mumble', () => {
    it('mumble(ZpglnRxqenU) => Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', () => {
        expect(mumble('ZpglnRxqenU')).toEqual('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu')
    })
})

describe('mumble', () => {
    it('mumble(NyffsGeyylB) => N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb', () => {
        expect(mumble('NyffsGeyylB')).toEqual('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb')
    })
})