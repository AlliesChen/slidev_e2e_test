import { test, expect } from '@playwright/test';

const TEST_URL = "http://localhost:3030/6?clicks=2";

test('has title', async ({ page }) => {
    await page.goto(TEST_URL);
    const heading = page.getByRole("heading", { name: "E2E 測試 Demo" });
    // Expect a title "to contain" a substring.
    await expect(heading).toBeVisible();
});

test('has a counter', async ({ page }) => {
    await page.goto(TEST_URL);
    // Expects page to have a counter component.
    const counter = page.getByTestId("counter");
    expect(counter).toBeDefined();

    // Click the plus button..
    await page.getByRole("button", { name: /\+/ }).click();
    await expect(counter).toHaveText("11");
});
