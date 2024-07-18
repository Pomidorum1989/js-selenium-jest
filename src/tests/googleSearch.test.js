const { getDriver } = require('../utils/driverUtils');
const GooglePage = require('../pages/googlePage');

let driver;
let googlePage;

const browserName = process.env.BROWSER || 'chrome';

beforeAll(async () => {
  driver = await getDriver(browserName);
  googlePage = new GooglePage(driver);
});

afterAll(async () => {
  await driver.quit();
});

test(`Google Search for Selenium WebDriver - ${browserName}`, async () => {
  await googlePage.open();
  await googlePage.search('Selenium WebDriver');
  const title = await googlePage.getTitle();
  expect(title).toContain('Selenium WebDriver');
});