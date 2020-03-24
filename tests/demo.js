var config = require('../nightwatch.conf');

module.exports = {
    '@tags': ['test'],
    
    // 'Test 1 Scenario': function(browser) {
    //     browser
    //     .url('https://www.google.com/')
    //     .waitForElementVisible('body', 1000)
    //     .saveScreenshot(config.imgpath(browser) + 'scenario1.png')
    // },

    // 'Test 2 Scenario': function(browser) {
    //     browser
    //     // .url('https://www.google.com/')
    //     .waitForElementVisible('body', 1000)
    //     .saveScreenshot(config.imgpath(browser) + 'scenario2.png')
    // .execute('scrollTo(0, 0)')
    // .pause(3000)
    // .saveScreenshot('./screenshots/Chrome/amazon.jpg');
    //     .end();
    // }

    'Scenario1: Google Assert Title': function(browser) {
        browser
          .url('https://www.google.com/')
          .waitForElementVisible('body')
          .assert.title('Google')
          .saveScreenshot(config.imgpath(browser) + 'scenario1.png')
          .saveScreenshot('./screenshots/Chrome/Scenario1.jpg');
        //   .end();
      },
      'Scenario2: Google Assert Title': function(browser) {
        browser
        //   .url('https://www.google.com/')
          .waitForElementVisible('body')
          .assert.title('Google')
          .saveScreenshot(config.imgpath(browser) + 'scenario2.png')
          .end();
      }



};