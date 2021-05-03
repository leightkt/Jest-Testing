const { reverseString } = require('../reverseString')

describe("reverseString", () => {
    it("reverseString('helloworld') => dlrowolleh", () => {
        expect(reverseString('helloworld')).toEqual("dlrowolleh")
    })
})

describe("reverseString", () => {
    it("reverseString('mellowonion') => noinowollem", () => {
        expect(reverseString('mellowonion')).toEqual("noinowollem")
    })
})

describe("reverseString", () => {
    it("reverseString('happyhippie') => eippihyppah", () => {
        expect(reverseString('happyhippie')).toEqual("eippihyppah")
    })
})