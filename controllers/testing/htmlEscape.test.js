const { htmlEscape } = require('../handleUnsafeChars')

describe('It meets security protocol for input post requests', () =>{
    it('returns the unaltered argument ', () => {
        expect(htmlEscape('JohnDoe')).toBe('JohnDoe')
        expect(htmlEscape('abc123')).toBe('abc123')
    })
    it('Escapes dangerous characters', () => {
        expect(htmlEscape(`<script>alert('XSS Attack!');</script>`)).toBe('&lt;script&gt;alert(&#39;XSS Attack!&#39;);&lt;/script&gt;')
    })

})