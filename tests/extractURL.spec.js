const { extractURL } = require('../extractURL')

describe("extractURL", () => {
    it("extractURL('http://google.com') => google", () => {
        expect(extractURL('http://google.com')).toEqual('google')
    })
})

describe("extractURL", () => {
    it("extractURL('http://google.co.jp') => google", () => {
        expect(extractURL('http://google.co.jp')).toEqual('google')
    })
})

describe()