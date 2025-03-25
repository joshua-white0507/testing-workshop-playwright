import { test } from "@playwright/test";
import { StartPage } from './pages/startPage';


test(`Find Calculate Holiday Entitlement`, async ({ page }) => {
    const start = new StartPage(page);
    await start.checkPageLoads();
});

test(`Click start button`, async ({ page }) => {
    const start = new StartPage(page);
    await start.clickStartButton();
});