const WebPage = require('../pageobjects/web.page');

describe('Web page', () => {
    it('checks menu button', async () => {
        const data = await WebPage.getData();

        await WebPage.open();
        const title = await browser.getTitle();
        await WebPage.menuButton.click();
        await expect(WebPage.menu).toBeDisplayed();
        await WebPage.supplyOptionsButton.click();
        await browser.switchWindow("supply");
        await expect(browser).toHaveTitleContaining("Виды доставки");
        await driver.switchContext('NATIVE_APP');
        const tabButton = await $(`~${title}, tab`)
        await tabButton.click();
        await driver.switchContext('CHROMIUM');
        await browser.switchWindow(data.baseUrl);
        await expect(browser).toHaveUrlContaining(data.baseUrl);
        await WebPage.closeMenuButton.click();
        await expect(WebPage.menu).not.toHaveAttributeContaining('class', 'show');
    })
})
