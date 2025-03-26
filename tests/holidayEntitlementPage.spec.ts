import { test as base } from "@playwright/test";
import { govPage } from "./pages/govPage";

const test = base.extend<{ gov: govPage }>({
    gov: async ({ page }, use) => {
        const holidayEntitlement = new govPage(page);
        await use(holidayEntitlement);
    }
});

test(`Check page has correct heading`, async ({ gov }) => {
    await gov.checkPageHeading();
});

test(`Check cookies message is present on page`, async ({ gov }) => {
    await gov.checkCookieMessagePresent();
});

