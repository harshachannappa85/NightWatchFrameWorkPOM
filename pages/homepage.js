
module.exports = {
    elements: {
        tab_homescreen_home:{
                                selector: '//*[@id=\'header\']//span[text()=\'Home\']',
                                locateStrategy: 'xpath'
                            },
        tab_homescreen_categories:{
                                selector: '//*[@id="header"]//a[text()="Categories"]',
                                locateStrategy: 'xpath'
                            },
    },

    commands: [{
        verifyHomeScreen(){
            return this
            .waitForElementVisible('@tab_homescreen_home')
            .waitForElementVisible('@tab_homescreen_categories')
        },
    }]


};