const AppPage = require('../pageobjects/app.page');

describe("App page", () => {
    it('logins', async() => {
        const data = await AppPage.getData();

        await AppPage.nextButton.click()
        await AppPage.nameInput.setValue(data.name);
        await AppPage.passInput.setValue(data.pass);
        await AppPage.genderRadioButton.click();
        await AppPage.privacyToggle.click();
        await AppPage.signupButton.click();
        await expect(AppPage.appHeading).toBeDisplayed();
    })
})