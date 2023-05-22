const { clickElement, getText } = require("./lib/commands.js");

let page;

describe("tests cinema", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });
  afterEach(() => {
    page.close();
  });
  test("sad test, should not reservation seats for unavailable vip seats", async () => { 
    await clickElement(page, "nav a + a");
    await clickElement(page, "ul li a");
    await clickElement(page, 'div:nth-child(7) > span:nth-child(4)');
    await clickElement(page, 'button');
    const actual = await getText(page, "h2");
    expect(actual).toContain("Терминатор-заржавел");
  });
  test("happy test, should to make a reservation ticket", async () => {
    await clickElement(page, "nav a + a");
    await clickElement(page, "ul li a");
    await clickElement(page, 'div:nth-child(4) > span:nth-child(4)');
    await clickElement(page, 'button');
    const actual = await getText(page, "h2");
    expect(actual).toContain("Вы выбрали билеты:");
});
  test("happy test, should to make a reservation tickets", async () => {
    await clickElement(page, "nav a + a");
    await clickElement(page, "ul li a");
    await clickElement(page, 'div:nth-child(9) > span:nth-child(4)');
    await clickElement(page, 'div:nth-child(9) > span:nth-child(5)');
    await clickElement(page, 'button');
    const actual = await getText(page, "h2");
    expect(actual).toContain("Вы выбрали билеты:");
  });
});
