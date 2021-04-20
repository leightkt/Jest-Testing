const { romanNumeral } = require('../romanNumeral')

describe('romanNumeral', () => {
    it('romanNumeral(XXI) => 21', () => {
        expect(romanNumeral('XXI')).toBe(21)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(MMVIII) => 2008', () => {
        expect(romanNumeral('MMVIII')).toBe(2008)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(I) => 1', () => {
        expect(romanNumeral('I')).toBe(1)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(MDCLXVI) => 1666', () => {
        expect(romanNumeral('MDCLXVI')).toBe(1666)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(IV) => 4', () => {
        expect(romanNumeral('IV')).toBe(4)
    })
})

describe('romanNumeral', () => {
    it('romanNumeral(IX) => 9', () => {
        expect(romanNumeral('IX')).toBe(9)
    })
})