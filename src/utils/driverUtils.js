const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');

const getDriver = async (browserName = 'chrome') => {
  let driver;

  switch (browserName.toLowerCase()) {
    case 'chrome':
      driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();
      break;

    case 'firefox':
      driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(new firefox.Options().headless)
        .build();
      break;

    case 'edge':
      driver = await new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeOptions(new edge.Options().headless)
        .build();
      break;

    default:
      throw new Error(`Unsupported browser: ${browserName}`);
  }

  return driver;
};

module.exports = { getDriver };