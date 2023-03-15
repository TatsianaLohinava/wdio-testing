const MainPage = require('../pageobjects/main.page');
const SearchBar = require('../pageobjects/search.page');
const ResultPage = require('../pageobjects/result.page');

describe("Result page", () => {
    it('checks the query results', async () => {
        await MainPage.open();
        await SearchBar.searchField.setValue('Сыворотка');
        await SearchBar.searchButton.click();
        await ResultPage.checkProducts('.item-type-card__title');
    })

    it('filters the new products', async () => {
        await MainPage.open();
        await SearchBar.searchField.setValue('Bitey');
        await SearchBar.searchButton.click();
        await ResultPage.filterOptionForNew.click();
        await ResultPage.checkProducts('span*=Новинка');
    })
})