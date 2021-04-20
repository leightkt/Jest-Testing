const { findIntegers } = require('../findIntegers')

describe("findIntegers", () => {
    it("findIntegers([0, 1, 2]) => 1", () => {
        expect(findIntegers([0, 1, 2])).toBe(1)
    })
})

describe("findIntegers", () => {
    it("findIntegers([1, 2, 3]) => 2", () => {
        expect(findIntegers([1, 2, 3])).toBe(2)
    })
})