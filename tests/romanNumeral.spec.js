const { romanNumeral } = require('../romanNumeral')

describe('romanNumeral', () => {
    it('romanNumeral(XXI) => 21', () => {
        expect(romanNumeral('XXI')).toBe(21)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(MMVIII) => 2008', () => {
        expect(romanNumeral('MVIII')).toBe(2008)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(I) => 1', () => {
        expect(romanNumeral('I')).toBe(1)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(MDCLXVI => 1666', () => {
        expect(romanNumeral('MDCLXVI')).toBe(1666)
    })
})