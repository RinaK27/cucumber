const {Given, When, Then, Before, After} = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai');
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
  
Given("user opens the site", {timeout: 60 * 1000}, async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php");
});
When("user clicks on tomorrow", async function () {
  return await clickElement(this.page, "nav a + a");
});
When("user clicks on available time", async function () {
  return await clickElement(this.page, "ul li a");
});
When("user clicks in available seat", async function () {
  return await clickElement(this.page, 'div:nth-child(7) > span:nth-child(4)');
});
When("user clicks on button", async function () {
  return await clickElement(this.page, 'button');
});
Then("user goes to the payment page", async function () {
  const actual = await getText(this.newPage, "h2");
  expect(actual).toContain("Вы выбрали билеты:");
});

Given("user is on page", {timeout: 60 * 1000}, async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php");
  });
  When("user clicks on the day after the current day", async function () {
  return await clickElement(this.page, "nav a + a");
  });
  When("user clicks on active time", async function () {
  return await clickElement(this.page, "ul li a");
  });
  When("user clicks on empty seat", async function () {
  return await clickElement(this.page, 'div:nth-child(9) > span:nth-child(4)');
  });
  When("user clicks in another one available seat", async function () {
  return await clickElement(this.page, 'div:nth-child(9) > span:nth-child(5)');
  });
  When("user click on button", async function () {
  return await clickElement(this.page, 'button');
  });
  Then("user moves to the payment page", async function (string) {
    const actual = await getText(this.page, "h2");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  Given("user opens the page", {timeout: 60 * 1000}, async function () {
    return await this.page.goto("http://qamid.tmweb.ru/client/index.php");
  });
  When("user clicks on next day", async function () {
    return await clickElement(this.page, "nav a + a");
  });
  When("user clicks on 10 am", async function () {
    return await clickElement(this.page, "ul li a");
  });
  When("user clicks on seat", async function () {
    await clickElement(this.page, 'div:nth-child(10) > span:nth-child(3)');
  });
  When("user presses the button for reservation", async function () {
    return await clickElement(this.page, 'button');
  });
  When("user presses the button for code", async function () {
    return await clickElement(this.page, 'button');
  });
  When("user comes back for reservation page", {timeout: 60 * 1000}, async function () {
    await this.page.goto("http://qamid.tmweb.ru/client/hall.php");
  });
  When("user clicks again on seat", async function () {
    await clickElement(this.page, 'div:nth-child(10) > span:nth-child(3)');
  });
  When("user presses again the button for reservation", async function () {
    await clickElement(this.page, 'button');
  });
  Then("user stays on the current page", async function (string) {
    const actual = await getText(this.page, "h2");
    expect(actual).toContain("Терминатор-заржавел");
  });