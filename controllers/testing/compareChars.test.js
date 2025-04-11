const compareChars = require('../PostHandlers/compareChars')

describe('it correctly checks if passwords match', () => {
    it('returns false for same length, mismatched strings', () => {
        expect(compareChars('passwrod', 'password')).toBe(false)
        expect(compareChars('abc123', '321cba')).toBe(false)
    })
    it('returns false for different length strings', () => {
        expect(compareChars('asdf', 'asd')).toBe(false)
        expect(compareChars('length', 'length112')).toBe(false)
    })
    it('returns false for malicious entries', () => {
        expect(compareChars(`<script>alert('XSS Attack!');</script>`, '&lt;script&gt;alert(&#39;XSS Attack!&#39;);&lt;/script&gt;')).toBe(false)
    })
    it('returns true for matching strings', () => {
        expect(compareChars('MyPassword','MyPassword')).toBe(true)
        expect(compareChars('ed968aad6ab34ea0a0720e0806613933','ed968aad6ab34ea0a0720e0806613933')).toBe(true)
    })
})
