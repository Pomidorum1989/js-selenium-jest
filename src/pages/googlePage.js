const { By, until } = require('selenium-webdriver');

class GooglePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.google.com';
    this.searchBox = By.name('q');
  }

  async open() {
    await this.driver.get(this.url);
  }

  async search(query) {
    const searchBoxElement = await this.driver.findElement(this.searchBox);
    await searchBoxElement.sendKeys(query);
    await searchBoxElement.submit();
    await this.driver.wait(until.titleContains(query), 10000);
  }

  async getTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = GooglePage;