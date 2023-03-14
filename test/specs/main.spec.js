const MainPage = require('../pageobjects/main.page');
const SearchBar = require('../pageobjects/search.page');
const LoginForm = require('../pageobjects/login.page');

describe('Main page', () => {
    it('resets the search input', async () => {
        await MainPage.open();
        await SearchBar.searchField.addValue('Ластик');
        await SearchBar.resetButton.click();
        await expect(SearchBar.searchField).toHaveValue('')
    })

    it('changes background on hover', async () => {
        await MainPage.open();
        const sidebarMenu = await MainPage.sidebarMenu;
        for (let item of sidebarMenu) {
            await item.moveTo();
            await expect(item).toHaveAttributeContaining('class', 'main-nav__list__li_wnav_active')
        }
    })

    it('shows message on invalid login credentials', async () => {
        await MainPage.open();
        await MainPage.loginButton.click();
        await LoginForm.loginWithEmailButton.click();
        await LoginForm.login('abcd@gmail.com', 'abcd');
        await expect(LoginForm.form).toHaveTextContaining('Адрес электронной почты не зарегистрирован.')
    })

    it('unpins the section', async () => {
        await MainPage.open();
        await MainPage.unpinHeader();
    })
})
