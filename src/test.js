const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
 
// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();

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



// /**
//  * Dependency Modules
//  */
// var assert = require("assert").strict;
// var webdriver = require("selenium-webdriver");
// require("geckodriver");// Application Server
// const serverUri = "http://localhost:3000/#";
// const appTitle = "React Selenium App";/**
//  * Config for Chrome browser
//  * @type {webdriver}
//  */
// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "chrome" })
//  .build();/**
//  * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
//  * @type {webdriver}
//  */
// /*
// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "firefox" })
//  .build();
//  *//**
//  * Function to get the title and resolve it it promise.
//  * @return {[type]} [description]
//  */
// function logTitle() {
//  return new Promise((resolve, reject) => {
//   browser.getTitle().then(function(title) {
//    resolve(title);
//   });
//  });
// }/**
//  * Sample test case
//  * To check whether the given value is present in array.
//  */
// describe("Array", function() {
//  describe("#indexOf()", function() {
//   it("should return -1 when the value is not present", function() {
//    assert.equal([1, 2, 3].indexOf(4), -1);
//   });
//  });
// });describe("Home Page", function() {
//  /**
//   * Test case to load our application and check the title.
//   */
//  it("Should load the home page and get title", function() {
//   return new Promise((resolve, reject) => {
//    browser
//     .get(serverUri)
//     .then(logTitle)
//     .then(title => {
//      assert.strictEqual(title, appTitle);
//      resolve();
//     })
//     .catch(err => reject(err));
//   });
//  });/**
//   * Test case to check whether the given element is loaded.
//   */
//  it("Should check whether the given element is loaded", function() {
//   return new Promise((resolve, reject) => {
//    browser
//     .findElement({ id: "sel-button" })
//     .then(elem => resolve())
//     .catch(err => reject(err));
//   });
//  });/**
//   * End of test cases use.
//   * Closing the browser and exit.
//   */
//  after(function() {
//   // End of test use this.
//   browser.quit();
//  });
// });
