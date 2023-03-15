const Page = require('./page');

class ResultPage extends Page {

    get productsHeading() {
        return $('h1.breadcrumbs__list__item');
    }

    get resultCards() {
        return $$('.item-type-card');
    }

    get filterOptionForNew() {
        return $(".//*[@class = 'link-facet-bot' and text() = 'Новинки']");
    }

    async checkProducts(attributeValue) {
        const results = await this.resultCards;

        for (let item of results) {
            const title = await item.$(attributeValue);
            await expect(title).toExist();
        }
    }

    async open() {
        await super.open();
    }

}

module.exports = new ResultPage();