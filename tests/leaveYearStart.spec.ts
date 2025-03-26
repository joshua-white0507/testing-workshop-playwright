import {expect, test as base} from "@playwright/test";
import { leaveYearStartPage } from "./pages/leaveYearStart";
import leaveYearStartPageContent from "./content/leaveYearStart";

const test = base.extend<{ leaveYear: leaveYearStartPage }>({
    leaveYear: async ({ page }, use) => {
        const leaveYear = new leaveYearStartPage(page);
        await use(leaveYear);
    }
});

test(`Check ${leaveYearStartPageContent.pageTitle} page loads and has correct heading`, async ({ leaveYear }) => {
    await leaveYear.checkPageHeading();
});

test(`Check cookies message is present on ${leaveYearStartPageContent.pageTitle} page`, async ({ leaveYear }) => {
    await leaveYear.checkCookieMessagePresent();
});

test(`Given an invalid date page loads error box`, async ({ leaveYear }) => {
    const fieldIds = ['#response-0', '#response-1', '#response-2'];

    for (let i = 0; i < fieldIds.length; ++i) {
        await leaveYear.checkAnInvalidDateCreatesErrorField(fieldIds[i]);
    }
});

test(`Given an empty date field page loads error box`, async ({ leaveYear }) => {
    await leaveYear.checkAnEmptyDateCreatesErrorField();
});