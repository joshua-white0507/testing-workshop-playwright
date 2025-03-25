import { test as base } from "@playwright/test";
import { StartPage } from "./pages/startPage";

const test = base.extend<{ start: StartPage }>({
    start: async ({ page }, use) => {
        const start = new StartPage(page);
        await use(start);
    }
});

test(`Find Calculate Holiday Entitlement`, async ({ start }) => {
    await start.checkPageLoads();
});

test(`Start button links to the correct page`, async ({ start }) => {
});

test(`Click start button`, async ({ start }) => {
    await start.clickStartButton();
});

test(`Start button correctly links to the next page`, {
    tag: '@happy-path',
    },async ({ start }) => {
    await start.checkHappyPath();
});

