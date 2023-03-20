const MainPage = require('../pageobjects/main.page');
const SearchBar = require('../pageobjects/search.page');
const LoginForm = require('../pageobjects/login.page');
const fs = require('fs');
const {testRail} = require("@zebrunner/javascript-agent-webdriverio");

const testData = fs.promises.readFile('test/data/test-data.json', 'utf8')
    .then((data) => JSON.parse(data));

describe('Main page', () => {
    it('resets the search input', async () => {
        testRail.testCaseId("C3508");
        const data = await testData;
        await MainPage.open();
        await SearchBar.searchField.addValue(data.query);
        await SearchBar.resetButton.click();
        await expect(SearchBar.searchField).toHaveValue('')
    })

    it('changes background on hover', async () => {
        testRail.testCaseId("C3506");
        await MainPage.open();
        const sidebarMenu = await MainPage.sidebarMenu;
        for (let item of sidebarMenu) {
            await item.moveTo();
            await expect(item).toHaveAttributeContaining('class', 'main-nav__list__li_wnav_active')
        }
    })

    it('shows message on invalid login credentials', async () => {
        testRail.testCaseId("C3510");
        const data = await testData;
        await MainPage.open();
        await MainPage.loginButton.click();
        await LoginForm.loginWithEmailButton.click();
        await LoginForm.login(data.email, data.pass);
        await expect(LoginForm.form).toHaveTextContaining('Адрес электронной почты не зарегистрирован.')
    })

    it('unpins the section', async () => {
        testRail.testCaseId("C3507");
        await MainPage.open();
        await MainPage.unpinHeader();
    })
})
