import {expect, test as base} from "@playwright/test";
import { leaveYearStartPage } from "./pages/leaveYearStart";

const test = base.extend<{ leaveYear: leaveYearStartPage }>({
    leaveYear: async ({ page }, use) => {
        const leaveYear = new leaveYearStartPage(page);
        await use(leaveYear);
    }
});

test(`Happy path!`, async ({ page }) => {
    // TODO...
})

test(`Given an invalid date page loads error box`, async ({ leaveYear }) => {
    await leaveYear.checkAnInvalidDateCreatesErrorField();
});

test(`Given an empty date field page loads error box`, async ({ leaveYear }) => {
    await leaveYear.checkAnEmptyDateCreatesErrorField();
});





test(`Click continue`, async ({ page }) => {
    //await page.getByText('Continue').click();

    // Continue me!
    // How would you click the continue button?
});