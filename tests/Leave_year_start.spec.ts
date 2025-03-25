import {expect, test} from "@playwright/test";


test(`Inputing future `, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
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