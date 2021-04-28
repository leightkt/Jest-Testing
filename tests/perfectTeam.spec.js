const { perfectTeam } = require('../perfectTeam')

describe('perfectTeam', () => {
    it('perfectTeam(3, [[0,2], [1,2], [0,1], [0]]) => 3', () => {
        expect(perfectTeam(3, [[0,2], [1,2], [0,1], [0]])).toBe(3)
    })
})

describe('perfectTeam', () => {
    it('perfectTeam(6,[[0,1],  [1,3],  [0,2],  [0,5],  [1,4]]) => 5', () => {
        expect(perfectTeam(6,[[0,1],  [1,3],  [0,2],  [0,5],  [1,4]])).toBe(5)
    })
})