import {expect, test} from "@playwright/test";
import { IrregularHours } from './pages/irregularHoursPage';


test(`Find radio box and check yes`, async ({ page }) => {
    const start = new IrregularHours(page);
    await start.checkInputBox();
});



test(`Click start`, async ({ page }) => {
    const start = new IrregularHours(page);
    await start.clickContinueButton();
});