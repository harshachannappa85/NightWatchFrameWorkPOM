var data = require('../data/testdata.json');

module.exports = {
    elements: {
        tbx_login_email:'#formBasicEmail',
        tbx_login_password:'#formBasicPassword',
        btn_login_signin:'#cpd-body > div.container > div > div > div > div.auth-form-card.auth-form-fw.card > div > form > div.text-right.auth-form-action-button > button',
        lnk_login_signup: {
                            selector: '//div[contains(@class,"navbar-nav")]//a[text()="Sign up now!"]',
                            locateStrategy: 'xpath'
                        }
    },

    commands: [{
        verifyLoginScreen(){
            return this
            .waitForElementVisible('@tbx_login_email')
            .waitForElementVisible('@tbx_login_password')
            .waitForElementVisible('@btn_login_signin')
            .waitForElementVisible('@lnk_login_signup')
        },

        enterValidCredentials(){
            return this
            //this.verifyLoginScreen()
            .setValue('@tbx_login_email', data.testdata.email)
            .setValue('@tbx_login_password', data.testdata.password)           
        },

        clickSigninButton(){
            return this
            .click('@btn_login_signin');
        },

    }]


};
