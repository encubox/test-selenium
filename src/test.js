const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3001');

    let title = await driver.getTitle();
    assert.equal(title, 'React App');

    let root = await driver.findElement(By.id('root'));

    let text = await root.getText();

    assert.ok(text.includes('...loading dog...'));

    await driver.wait(until.elementLocated(By.css('#root button')), 5000);

    await driver.findElement(By.css('#root button')).click();

    let text2 = await root.getText();
    assert.ok(text2.includes('...loading users...'));

    await driver.wait(until.elementTextContains(await driver.findElement(By.css('#root')), 'catchPhrase'), 5000);
  } finally {
    await driver.quit();
  }
})();
