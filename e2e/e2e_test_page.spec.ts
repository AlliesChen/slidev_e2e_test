//#region snippet
import { test, expect } from '@playwright/test';

const TEST_URL = process.env.page_url || "http://localhost:3000";

test('has title', async ({ page }) => {
    await page.goto(TEST_URL);
    const heading = page.getByRole("heading", { name: "E2E 測試 Demo" });
    // Expect a title "to contain" a substring.
    await expect(heading).toBeVisible();
});
//#endregion snippet
test('has a counter', async ({ page }) => {
    await page.goto(TEST_URL);
    // Wait for the page to be visible
    await expect(page.getByRole("heading", { name: "E2E 測試 Demo" })).toBeVisible();
    const nextSlideBtn = page.getByRole("button", { name: "Go to next slide" });
    await nextSlideBtn.click({ clickCount: 1});
    // Expects page to have a counter component.
    const counter = page.getByTestId("counter").nth(1);
    await expect(counter).toContainText("10");
});

test("clicking the button increments the counter", async ({ page }) => {
    await page.goto(TEST_URL);
    // Wait for the page to be visible
    await expect(page.getByRole("heading", { name: "E2E 測試 Demo" })).toBeVisible();
    const nextSlideBtn = page.getByRole("button", { name: "Go to next slide" });
    await nextSlideBtn.click({ clickCount: 1});
    // Expects page to have a counter component.
    const incrementBtn = page.getByRole("button", { name: "+" });
    await incrementBtn.click();
    expect(page.getByTestId("counter").getByText("11")).toBeTruthy();
});
