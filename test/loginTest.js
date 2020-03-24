var data = require('../data/testdata.json');
var config = require('../nightwatch.conf');
//var logger = require('../logs/log.js')

module.exports = {
    before : function(browser) {
        console.log('Setting up...');
        //logger.log('info', 'Setting up..');
      },
    
      after : function(browser) {
        console.log('Closing down...');
        //logger.log('info', 'Closing down..');
      },
    
      beforeEach : function(browser) {
    
      },
    
      afterEach : function(browser) {
    
      },
    
    '@tags': ['login'],
    '@disabled': false,

      'User is navigated to CPD Login Screen': (client) => {
        const loginpage = client.page.loginpage();
        // const homepage = client.page.homepage();
        
        loginpage
            .navigate(data.testdata.url)
            .verifyLoginScreen();

      },

      'Verify User successfully logs in': (client) => {
        const loginpage = client.page.loginpage();
        const homepage = client.page.homepage();

        loginpage
            .enterValidCredentials()
            .clickSigninButton()

        

        homepage
            .verifyHomeScreen()
       
        client.end();
        }
      };
