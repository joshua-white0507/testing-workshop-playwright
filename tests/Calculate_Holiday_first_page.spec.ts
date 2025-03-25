import {expect, test} from "@playwright/test";

test(`Find Calculate Holiday Entitlement`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    await expect(page.locator(`.govuk-heading-xl`))
        .toHaveText(`Calculate holiday entitlement`);
    
    // Continue me!
    // How would you click the continue button?
});



test(`Click start button`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    await page.getByRole('button', { name: 'Start Now' }).click();
    
    // Continue me!
    // How would you click the continue button?
});

