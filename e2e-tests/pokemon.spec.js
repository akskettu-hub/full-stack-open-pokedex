import { test, describe, expect } from '@playwright/test'
//beforeEach

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('Link for a specific pokemon can be visited', async ({ page }) => {
    await page.goto('/')

    const link = page.locator('a[href="/pokemon/ivysaur"]' )
    await expect(link).toBeVisible()
    //await expect(page.getByText('Chlorophyll')).toBeVisible()
  })

  test('Information for a specific pokemon exists on its page', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')

    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
