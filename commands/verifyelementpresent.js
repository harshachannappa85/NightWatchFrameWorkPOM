exports.command = function verifyelementpresent(locator){

return this
            .useXpath()
            .waitForElementVisible(locator)
            .expect.element(locator).to.be.present;
}