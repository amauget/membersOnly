const restoreText = require('../GetHandlers/restoreText')

describe('input array of lists to correctly return escaped html', () =>{

    it("correctly restores apostrophes", () =>{
        expect(restoreText([{content: "Here&#39;s my text!"}])[0].content)
            .toBe("Here's my text!")

            expect(restoreText([{content: `&quot;This&quot; &gt; &#39;that&#39; &amp; &lt; &quot;them&quot;`}])[0].content)
            .toBe(`"This" > 'that' & < "them"`)
    })
})