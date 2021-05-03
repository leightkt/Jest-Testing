const { reverseString } = require('../reverseString')

describe("reverseString", () => {
    it("reverseString('helloworld') => dlrowolleh", () => {
        expect(reverseString('helloworld')).toEqual("dlrowolleh")
    })
})