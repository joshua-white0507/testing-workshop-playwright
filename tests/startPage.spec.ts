import { test as base } from "@playwright/test";
import { StartPage } from "./pages/startPage";
import startPageContent from "./content/startPageContent";


const test = base.extend<{ start: StartPage }>({
    start: async ({ page }, use) => {
        const start = new StartPage(page);
        await use(start);
    }
});

test(`Check ${startPageContent.pageTitle} page loads and has correct heading`, async ({ start }) => {
    await start.checkPageHeading();
});

test(`Check cookies message is present on ${startPageContent.pageTitle} page`, async ({ start }) => {
    await start.checkCookieMessagePresent();
});

test(`Check footer is present on ${startPageContent.pageTitle} page`, async ({ start }) => {
    await start.checkFooterPresent();
});

test(`Click start button`, async ({ start }) => {
    await start.clickStartButton();
});

test(`Start button correctly links to the next page`, {
    tag: '@happy-path',
    },async ({ start }) => {
    await start.checkHappyPath();
});

test(`Irregular Hours Page test`, {
    tag: '@happy-path',
    },async ({ start }) => {
    await start.checkIrregularHoursPath();
});

test(`Check for when the year leave starts`, {
    tag: '@happy-path',
    },async ({ start }) => {
    await start.checkLeaveYearStart();
});

test(`Check for Employee hours worked`, {
    tag: '@happy-path',
    },async ({ start }) => {
    await start.checkHoursEmployeeWorked();
});

test(`The results page reflect the correct results`, {
    tag: '@results-path',
    },async ({ start }) => {
    await start.checkResultsPage();
});
