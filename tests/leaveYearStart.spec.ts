import {expect, test} from "@playwright/test";


test(`Happy path!`, async ({ page }) => {
    // TODO...
});

test(`Given an empty date field page loads error box`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
    // TODO:
    // 1) Do not input date to all fields
    // 2) Press continue
    // 3) Find error box
    //await page.getByLabel('Yes').check();
    
    // Continue me!
    // How would you click the continue button?
});

test(`Given an invalid date page loads error box`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
    // TODO:
    // 1) Input invalid date to all fields
    // 2) Press continue
    // 3) Find error box
    //await page.getByLabel('Yes').check();
    
    // Continue me!
    // How would you click the continue button?
});



test(`Click continue`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
    //await page.getByText('Continue').click();

    // Continue me!
    // How would you click the continue button?
});