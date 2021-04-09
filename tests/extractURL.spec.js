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

describe("extractURL", () => {
    it("extractURL('www.xakep.ru') => xakep", () => {
        expect(extractURL('www.xakep.ru')).toEqual('xakep')
    })
})

describe("extractURL", () => {
    it("extractURL('https://youtube.com') => youtube", () => {
        expect(extractURL('https://youtube.com')).toEqual('youtube')
    })
})

