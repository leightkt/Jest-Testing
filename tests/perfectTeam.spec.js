const { perfectTeam } = require('../perfectTeam')

describe('perfectTeam', () => {
    it('perfectTeam(3, [[0,2], [1,2], [0,1], [0]]) => 3', () => {
        expect(perfectTeam(3, [[0,2], [1,2], [0,1], [0]])).toBe(3)
    })
})