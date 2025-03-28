const {comparePasswords} = require('../passwordUtilities')

describe('it correctly checks if passwords match', () => {
    it('returns false for same length, mismatched strings', () => {
        expect(comparePasswords('passwrod', 'password')).toBe(false)
        expect(comparePasswords('abc123', '321cba')).toBe(false)
    })
    it('returns false for different length strings', () => {
        expect(comparePasswords('asdf', 'asd')).toBe(false)
        expect(comparePasswords('length', 'length112')).toBe(false)
    })
    it('returns true for matching strings', () => {
        expect(comparePasswords('MyPassword','MyPassword')).toBe(true)
        expect(comparePasswords('ed968aad6ab34ea0a0720e0806613933','ed968aad6ab34ea0a0720e0806613933')).toBe(true)
    })
})
