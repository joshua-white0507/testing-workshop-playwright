import { test as base } from "@playwright/test";
import { StartPage } from './pages/startPage';

const test = base.extend<{ start: StartPage }>({
    start: async ({ page }, use) => {
        const start = new StartPage(page);
        await use(start);
    }
});

test(`Find Calculate Holiday Entitlement`, async ({ start }) => {
    await start.checkPageLoads();
});

test(`Click start button`, async ({ start }) => {
    await start.clickStartButton();
});
