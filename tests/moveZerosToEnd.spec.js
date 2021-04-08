const { moveZerosToEnd } = require('../moveZerosToEnd')

describe("moveZerosToEnd", () => {
    it("moveZerosToEnd([1,2,0,1,0,1,0,3,0,1]) => [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]", () => {
        expect(moveZerosToEnd([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
    })
})

describe("moveZerosToEnd", () => {
    it("moveZerosToEnd([4, 5, 0, 6, 0, 7, 0, 0, 8]) => [4, 5, 6, 7, 8, 0, 0, 0, 0]", () => {
        expect(moveZerosToEnd([4, 5, 0, 6, 0, 7, 0, 0, 8])).toEqual([4, 5, 6, 7, 8, 0, 0, 0, 0])
    })
})