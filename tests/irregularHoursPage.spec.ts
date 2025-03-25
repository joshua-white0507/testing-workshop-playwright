import {expect, test} from "@playwright/test";
import { IrregularHours } from "./pages/irregularHoursPage";

test(`Find radio box and check yes`, async ({ page }) => {
    const start = new IrregularHours(page);
    await start.checkInputBox();
});
test(`Click start`, async ({ page }) => {
    const start = new IrregularHours(page);
    await start.clickContinueButton();
});

test(`Does the employee work irregular hours`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
    await page.getByLabel('Yes').check();
    
    // Continue me!
    // How would you click the continue button?
});

test(`Click continue`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
    await page.getByText('Continue').click();

    // Continue me!
    // How would you click the continue button?
});