const{test, expect}= require('@playwright/test')

test('Launch the application',async({page}) =>{
await page.goto('https://playwright.dev/docs/writing-tests');
await expect(page).toHaveTitle('Writing tests | Playwright');
})


