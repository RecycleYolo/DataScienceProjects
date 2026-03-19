import { test, expect } from '@playwright/test';

test('verify title is correct', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/');

  let url:string = page.url();

  console.log("URL",url);


  await expect(page).toHaveURL('https://rahulshettyacademy.com/');
});

 