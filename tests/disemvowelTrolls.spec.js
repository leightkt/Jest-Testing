const { disemvowelTrolls } = require("../disemvowelTrolls");

describe('disemvowelTrolls', () => {
    it('disemvowelTrolls("This website is for losers LOL!") => "Ths wbst s fr lsrs LL!"', () => {
        expect(disemvowelTrolls("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!")
    })
})

describe('disemvowelTrolls', () => {
    it('disemvowelTrolls("No offense but,\nYour writing is among the worst I\'ve ever read") => "N ffns bt,\nYr wrtng s mng th wrst \'v vr rd"', () => {
        expect(disemvowelTrolls("No offense but,\nYour writing is among the worst I\'ve ever read")).toEqual("N ffns bt,\nYr wrtng s mng th wrst \v vr rd")
    })
})

describe('disemvowelTrolls', () => {
    it('disemvowelTrolls("What are you, a communist?") => "Wht r y,  cmmnst"', () => {
        expect(disemvowelTrolls("What are you, a communist?")).toEqual("Wht r y,  cmmnst")
    })
})