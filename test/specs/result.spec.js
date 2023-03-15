const MainPage = require('../pageobjects/main.page');
const SearchBar = require('../pageobjects/search.page');
const ResultPage = require('../pageobjects/result.page');
const fs = require('fs');

const testData = fs.promises.readFile('test/data/test-data.json', 'utf8')
    .then((data) => JSON.parse(data));

describe("Result page", () => {
    it('checks the query results', async () => {
        const data = await testData;
        await MainPage.open();
        await SearchBar.searchField.setValue(data.query);
        await SearchBar.searchButton.click();
        await ResultPage.checkProducts('.item-type-card__title');
    })

    it('filters the new products', async () => {
        const data = await testData;
        await MainPage.open();
        await SearchBar.searchField.setValue(data.query);
        await SearchBar.searchButton.click();
        await ResultPage.filterOptionForNew.click();
        await ResultPage.checkProducts('span*=Новинка');
    })
})