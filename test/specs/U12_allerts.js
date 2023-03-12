const expectchai = require('chai').expect

// Scrolling to invisible objest with view mode
describe('Functional testing on Application',async()=> // function()
{

it('Allerts', async()=>
{
    await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
    //doubleclick
    await $("button").doubleClick()
    await browser.pause(3000)
    /* Alert open
    console.log(await browser.isAlertOpen())
    await browser.pause(3000)
    expectchai(await browser.isAlertOpen()).to.be.true
    await browser.pause(3000)
    // Alert text displayed
    expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    // click OK
    await browser.acceptAlert()
    await browser.pause(3000)*/

    async function isAlertPresent() {
        return async function() {
          try {
            await this.getAlertText();
       
            return true;
          } catch (error) {
            if (error.name === 'no such alert') {
              return false;
            } else {
              throw error;
            }
          }
        };
      }
    
    

        await browser.waitUntil(isAlertPresent());
        const msg = await browser.getAlertText();
        expect(msg).toEqual('You double clicked me.. Thank You..');
      });
})
