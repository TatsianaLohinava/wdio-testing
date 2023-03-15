const Page = require('./page');

class SearchBar extends Page {
    get searchField() {
        return $('#top-s');
    }

    get resetButton() {
        return $('.input-reset');
    }

    get searchButton() {
        return $('.top-panel__search__btn');
    }

    async open() {
        await super.open()
    }
}

module.exports = new SearchBar();