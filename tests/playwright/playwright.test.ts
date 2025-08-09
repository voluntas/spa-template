import { expect, test } from '@playwright/test'

test('displays Hello World on the page', async ({ page }) => {
  await page.goto('http://localhost:5174/')
  
  await expect(page.getByText('Hello World')).toBeVisible()
})
