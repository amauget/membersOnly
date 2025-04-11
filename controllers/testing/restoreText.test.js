const restoreText = require('../GetHandlers/restoreText')

describe('input array of lists to correctly return escaped html', () =>{

    it("correctly restores apostrophes", () =>{
        expect(restoreText([{content: "Here&#39;s my text!"}], 'content')[0].content)
            .toBe("Here's my text!")

            expect(restoreText([{content: `&quot;This&quot; &gt; &#39;that&#39; &amp; &lt; &quot;them&quot;`}], 'content')[0].content)
            .toBe(`"This" > 'that' & < "them"`)
    })
})